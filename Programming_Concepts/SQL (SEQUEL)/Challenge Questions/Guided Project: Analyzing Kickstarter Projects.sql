-- This SQL query retrieves detailed information about failed Kickstarter projects
-- that still managed to gather significant support, then categorizes their funding
-- status and sorts them to highlight those closest to their goal within each category.

SELECT
  main_category,
  goal,
  backers,
  pledged,
  state,
  CAST(pledged AS REAL) / goal AS pct_pledged, -- Calculate percentage pledged
  CASE
    WHEN (CAST(pledged AS REAL) / goal) >= 1 THEN 'Fully funded'
    WHEN (CAST(pledged AS REAL) / goal) >= 0.75 AND (CAST(pledged AS REAL) / goal) < 1 THEN 'Nearly funded'
    ELSE 'Not nearly funded'
  END AS funding_status -- Determine funding status based on pct_pledged
FROM
  ksprojects
WHERE
  state = 'failed' AND backers >= 100 AND pledged >= 20000
ORDER BY
  main_category ASC,
  pct_pledged DESC
LIMIT 10;