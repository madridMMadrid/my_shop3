<?php
	header('Access-Control-Allow-Origin: *');

	usleep(500000);

	$data = [
		[
			'id_product' => 10,
			'title' => 'Iphone 5',
			'price' => 20000
		],
		[
			'id_product' => 20,
			'title' => 'Iphone 6',
			'price' => 25000
		],
		[
			'id_product' => 30,
			'title' => 'Iphone 7',
			'price' => 30000
		]
	];	

echo json_encode($data);