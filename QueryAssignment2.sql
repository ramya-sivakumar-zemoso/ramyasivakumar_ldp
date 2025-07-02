use sakila;

-- 1. Find out the number of documentaries with deleted scenes.
-- 2. Find out the number of sci-fi movies rented by the store managed by Jon Stephens.
-- 3. Find out the total sales from Animation movies.
-- 4. Find out the top 3 rented category of movies by “PATRICIA JOHNSON”.
-- 5. Find out the number of R rated movies rented by “SUSAN WILSON”.

select COUNT(*) AS documentary_with_deleted_scenes
from film f
join film_category fc ON f.film_id = fc.film_id
join category c ON fc.category_id = c.category_id
where c.name = 'Documentary'
  AND f.special_features LIKE '%Deleted Scenes%';


select COUNT(*) AS scifi_movies_rented
from staff s
join store st ON s.store_id = st.store_id
join customer c ON c.store_id = st.store_id
join rental r ON r.customer_id = c.customer_id
join inventory i ON r.inventory_id = i.inventory_id
join film f ON i.film_id = f.film_id
join film_category fc ON f.film_id = fc.film_id
join category cat ON fc.category_id = cat.category_id
where s.first_name = 'JON'
  AND s.last_name = 'STEPHENS'
  AND cat.name = 'Sci-Fi';

select SUM(p.amount) AS total_sales_from_animation
from payment p
join rental r ON p.rental_id = r.rental_id
join inventory i ON r.inventory_id = i.inventory_id
join film f ON i.film_id = f.film_id
join film_category fc ON f.film_id = fc.film_id
join category c ON fc.category_id = c.category_id
where c.name = 'Animation';


select c.name AS category, COUNT(*) AS rentals
from customer cu
join rental r ON cu.customer_id = r.customer_id
join inventory i ON r.inventory_id = i.inventory_id
join film f ON i.film_id = f.film_id
join film_category fc ON f.film_id = fc.film_id
join category c ON fc.category_id = c.category_id
where cu.first_name = 'PATRICIA' AND cu.last_name = 'JOHNSON'
group by c.name
order by rentals DESC
LIMIT 3;

select COUNT(*) AS r_rated_movies_rented
from customer cu
join rental r ON cu.customer_id = r.customer_id
join inventory i ON r.inventory_id = i.inventory_id
join film f ON i.film_id = f.film_id
where cu.first_name = 'SUSAN' AND cu.last_name = 'WILSON' AND f.rating ='R';
