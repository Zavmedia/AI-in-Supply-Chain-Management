# Sample Dataset Structures for AI-Powered Supply Chain Platform

## 1. Overview

This document defines the structure of key datasets required for the AI-powered supply chain management platform. These structures are designed to support features like demand prediction, smart inventory management, and supplier risk analysis. Example data is provided in CSV format for clarity.

## 2. Demand Prediction Dataset

*   **Filename:** `demand_forecast_data.csv`
*   **Purpose:** Used to train machine learning models for predicting future product demand. This data helps in understanding sales patterns and the impact of various internal and external factors on demand.
*   **Granularity:** Daily or weekly product sales data at the SKU (Stock Keeping Unit) or product ID level. Data can also be segmented by location (e.g., store, warehouse) if location-specific forecasts are required.
*   **Fields:**
    *   `date`: DATE (Format: YYYY-MM-DD or YYYY-MM-DD HH:MM:SS if hourly granularity is needed) - Timestamp of the sales record.
    *   `product_id`: STRING - Unique identifier for the product or Stock Keeping Unit (SKU).
    *   `location_id`: STRING (Optional) - Identifier for the specific store, warehouse, or sales region. Essential if forecasts need to be location-specific.
    *   `sales_units`: INTEGER - Number of units of the product sold during the period. **(This is the primary target variable for forecasting models).**
    *   `price`: FLOAT - Selling price of the product at the time of sale.
    *   `on_promotion`: BOOLEAN - Indicator (True/False) whether the product was part of a sales promotion during the period.
    *   `holiday_name`: STRING (Optional) - Name of the public holiday if the date falls on one (e.g., "Christmas", "New Year's Day", "None"). Can be used to create holiday features.
    *   `is_holiday`: BOOLEAN (Optional) - Simpler indicator (True/False) if the date is a public holiday.
    *   `weather_avg_temp_c`: FLOAT (Optional) - Average daily temperature in Celsius for the `location_id`. Useful if weather impacts sales (e.g., ice cream, seasonal clothing).
    *   `local_event_type`: STRING (Optional) - Type of significant local event occurring near the `location_id` (e.g., "Festival", "Sporting Event", "Conference", "None").
    *   `marketing_spend`: FLOAT (Optional) - Marketing expenditure allocated to this product, product category, or store for the given period.
    *   `competitor_price_avg`: FLOAT (Optional) - Average selling price of comparable competitor products during the period.
*   **Example Data (CSV format):**
    ```csv
    date,product_id,location_id,sales_units,price,on_promotion,holiday_name,is_holiday,weather_avg_temp_c,local_event_type,marketing_spend,competitor_price_avg
    2023-01-01,SKU001,STORE01,50,10.99,FALSE,New Year's Day,TRUE,5.0,None,100.00,10.95
    2023-01-01,SKU002,STORE01,20,25.50,TRUE,New Year's Day,TRUE,5.0,None,50.00,25.00
    2023-01-02,SKU001,STORE01,35,10.99,FALSE,None,FALSE,6.5,None,0.00,10.99
    2023-01-02,SKU002,STORE01,15,25.99,FALSE,None,FALSE,6.5,None,0.00,25.45
    2023-01-01,SKU001,STORE02,75,10.99,FALSE,New Year's Day,TRUE,8.0,Festival,150.00,10.89
    2023-01-08,SKU001,STORE01,40,10.99,TRUE,None,FALSE,4.0,None,200.00,10.95
    ```

## 3. Inventory Management Dataset

*   **Filename:** `inventory_levels.csv`
*   **Purpose:** Tracks current and historical inventory levels for each product at specific locations. This data is crucial for smart inventory management features such as generating restock alerts, suggesting optimal order quantities, and calculating safety stock.
*   **Granularity:** Typically daily snapshots per product, per location.
*   **Fields:**
    *   `snapshot_date`: DATE (Format: YYYY-MM-DD) - The date on which the inventory snapshot was taken.
    *   `product_id`: STRING - Unique identifier for the product or SKU.
    *   `location_id`: STRING - Identifier for the store, warehouse, or distribution center.
    *   `quantity_on_hand`: INTEGER - Number of units of the product currently in stock at the specified location on the snapshot date.
    *   `quantity_on_order`: INTEGER - Number of units of the product that have been ordered from suppliers but not yet received.
    *   `lead_time_days`: INTEGER (Optional, can be per product or per product-supplier combination) - Average time in days it takes for stock to be replenished from the supplier after an order is placed.
    *   `reorder_point`: INTEGER (Optional, can be dynamically calculated by the system or be a static value) - The inventory level at which a new order should be triggered.
    *   `safety_stock`: INTEGER (Optional, can be dynamically calculated by the system or be a static value) - Extra stock held to mitigate the risk of stockouts due to demand variability or lead time uncertainty.
    *   `stockout_occurred`: BOOLEAN (Optional) - Indicator (True/False) whether a stockout (quantity_on_hand reached zero when there was demand) occurred for this product at this location on this day, or since the last snapshot.
    *   `supplier_id`: STRING (Optional) - Identifier for the primary supplier of this product at this location.
    *   `unit_cost`: FLOAT (Optional) - The cost per unit of the product from the specified supplier.
*   **Example Data (CSV format):**
    ```csv
    snapshot_date,product_id,location_id,quantity_on_hand,quantity_on_order,lead_time_days,reorder_point,safety_stock,stockout_occurred,supplier_id,unit_cost
    2023-01-01,SKU001,STORE01,100,50,7,60,30,FALSE,SUPPLIER_A,5.50
    2023-01-01,SKU002,STORE01,30,0,10,40,20,TRUE,SUPPLIER_B,15.00
    2023-01-02,SKU001,STORE01,95,50,7,60,30,FALSE,SUPPLIER_A,5.50
    2023-01-02,SKU002,STORE01,25,20,10,40,20,FALSE,SUPPLIER_B,15.00
    2023-01-01,SKU001,WAREHOUSE01,500,200,5,300,100,FALSE,SUPPLIER_A,5.25
    ```

## 4. Supplier Performance Dataset

*   **Filename:** `supplier_performance.csv`
*   **Purpose:** Used for training models for Supplier Risk Analysis and for general supplier performance monitoring. This dataset tracks the historical performance of suppliers based on orders and deliveries.
*   **Granularity:** Data can be recorded per order, or summarized periodically (e.g., monthly) per supplier and product. Per-order granularity provides more detail.
*   **Fields:**
    *   `report_date` or `order_date`: DATE (Format: YYYY-MM-DD) - The date the order was placed or the date the performance record is associated with.
    *   `supplier_id`: STRING - Unique identifier for the supplier.
    *   `product_id`: STRING - Unique identifier for the product or SKU supplied.
    *   `order_id`: STRING (If granularity is per-order) - Unique identifier for the purchase order.
    *   `quantity_ordered`: INTEGER - Number of units of the product ordered from the supplier.
    *   `quantity_received`: INTEGER - Number of units of the product actually received from the supplier.
    *   `promised_delivery_date`: DATE (Format: YYYY-MM-DD) - The delivery date promised by the supplier for the order.
    *   `actual_delivery_date`: DATE (Format: YYYY-MM-DD) - The actual date the order was delivered.
    *   `on_time_delivery`: BOOLEAN (Typically derived: `actual_delivery_date` <= `promised_delivery_date`).
    *   `days_late`: INTEGER (Typically derived: `actual_delivery_date` - `promised_delivery_date`, is 0 if on time or early).
    *   `quality_score`: FLOAT (Optional, e.g., a score from 1-5 based on inspections, or a defect rate as a percentage for the delivered batch).
    *   `price_per_unit`: FLOAT - The agreed price per unit for the product in this order.
    *   `price_variance_from_avg`: FLOAT (Optional) - Deviation of the `price_per_unit` from a benchmark, such as the historical average price for that product or average market price.
*   **Example Data (CSV format):**
    ```csv
    report_date,supplier_id,product_id,order_id,quantity_ordered,quantity_received,promised_delivery_date,actual_delivery_date,on_time_delivery,days_late,quality_score,price_per_unit,price_variance_from_avg
    2023-01-15,SUPPLIER_A,SKU001,ORD001,200,200,2023-01-10,2023-01-10,TRUE,0,4.5,5.50,-0.05
    2023-01-20,SUPPLIER_B,SKU002,ORD002,100,100,2023-01-15,2023-01-18,FALSE,3,4.0,15.20,0.10
    2023-02-10,SUPPLIER_A,SKU001,ORD003,150,145,2023-02-05,2023-02-07,FALSE,2,3.5,5.60,0.05
    2023-02-15,SUPPLIER_C,SKU003,ORD004,300,300,2023-02-14,2023-02-14,TRUE,0,4.8,2.10,0.00
    ```

These dataset structures provide a foundational basis for data collection and model development within the AI-powered supply chain platform. They can be extended or modified based on specific business requirements and data availability.
