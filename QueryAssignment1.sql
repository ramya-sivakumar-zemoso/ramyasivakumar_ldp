use sakila;

-- 1. Find out the PG-13 rated comedy movies. DO NOT use the film_list table.
-- 2. Find out the top 3 rented horror movies.
-- 3. Find out the list of customers from India who have rented sports movies.
-- 4. Find out the list of customers from Canada who have rented “NICK WAHLBERG” movies.
-- 5. Find out the number of movies in which “SEAN WILLIAMS” acted.

select title, rating, c.name AS category
from film f
inner join film_category fc
inner join category c
on f.film_id=fc.film_id 
AND fc.category_id = c.category_id
where rating = "PG-13" AND c.name="comedy";


select * 
from film f
inner join film_category fc
inner join category c
on f.film_id=fc.film_id 
AND fc.category_id = c.category_id
where c.name="horror" order by rental_rate DESC Limit 3;


select
    c.customer_id,
    c.first_name,
    co.country,
    ca.name AS category
from customer c
join address a on c.address_id = a.address_id
join city ci on a.city_id = ci.city_id
join country co on ci.country_id = co.country_id
join rental r on c.customer_id = r.customer_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
join film_category fc on f.film_id = fc.film_id
join category ca on fc.category_id = ca.category_id
where co.country = 'India' AND ca.name = 'Sports';


select c.first_name, co.country, a.first_name, a.last_name
from customer c
join address addr on c.address_id = addr.address_id
join city ci on addr.city_id = ci.city_id
join country co on ci.country_id = co.country_id
join rental r on c.customer_id = r.customer_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id
join film_actor fa on fa.film_id= f.film_id
join actor a on a.actor_id = fa.actor_id
where a.first_name = 'NICK' 
AND a.last_name= 'WAHLBERG' 
AND co.country = 'Canada';


select COUNT(*) AS movie_count
from film_actor fa
join actor a ON fa.actor_id = a.actor_id
where a.first_name = 'SEAN' AND a.last_name ='WILLIAMS';
