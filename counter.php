<?php
// counter.php
$counter_file = 'count.txt';

// Read the current count
$count = file_exists($counter_file) ? (int)file_get_contents($counter_file) : 0;

// Increment the count
$count++;

// Save the new count
file_put_contents($counter_file, $count);

// Output the count
echo $count;
?>
