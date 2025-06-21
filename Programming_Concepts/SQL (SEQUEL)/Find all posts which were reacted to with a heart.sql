SELECT
    fp.* -- Select all columns from the 'facebook_posts' table.
         -- 'fp' is an alias for 'facebook_posts', making the query more concise.
FROM
    facebook_posts fp -- Specify the primary table to retrieve data from,
                      -- and assign it the alias 'fp'.
JOIN
    facebook_reactions fr ON fp.post_id = fr.post_id -- Join 'facebook_posts' (fp) with 'facebook_reactions' (fr).
                                                  -- The join condition matches rows where the 'post_id' is the same in both tables,
                                                  -- linking posts to their reactions.
WHERE
    fr.reaction = 'heart'; -- Filter the joined results to include only those
                           -- reactions where the 'reaction' column in 'facebook_reactions' (fr) is 'heart'.