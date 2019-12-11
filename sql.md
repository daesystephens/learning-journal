# SQL

Structured Query Language is a language designated to manipulate and transform data.

Here the most use SQL query

Selects all items from table

```sql
SELECT * FROM table_name;
``` 

Selects all first 10 items from table

```sql
SELECT * FROM table_name LIMIT 10;
```

Selects column1, column2, column3

```sql
SELECT column1, column2, column3 FROM table_name;
``` 

This query returns every row and column from table_name, ordered by column1, in
ascending order (by default). 

```sql
SELECT * FROM table_name ORDER BY column1; 
```

This query returns every row and column from table_name, ordered by column1, in
descending order. 

```sql
SELECT * FROM table_name ORDER BY column1 DESC; 
```

It counts the number of rows in the SQL table in which the value in column1 is
'something'. 

```sql
SELECT COUNT(*) FROM table_name WHERE column1 = 'something'; 
```

This query sums the number of values in column2 - for each group of unique
column1 values. 

```sql
SELECT column1, SUM(column2) FROM table_name GROUP BY column1; 
```

This joins table1 and table2 values - for every row where the value of column1 from
table1 equals the value of column1 from table2. 

```sql
SELECT *
FROM table1
JOIN table2
ON table1.column1 = table2.column1; 
```