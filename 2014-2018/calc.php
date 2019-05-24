<?php if( isset($_GET['name'] )){

	class Calculator {

		public $age;
		public $name;
		public $slept;
		public $hours = 24;

		function __construct($cage,$cname,$cslept) {
			$this->age = $cage;
			$this->slept= $cslept;
			$this->name=$cname;

		}

		public function TotalHours() {

			$totalAmount = ( $this->age  * ( $this->slept * 365) / 24 );

			return 'Hey, ' . $this->name . ' you have slept ' . $totalAmount . 'years so far';
		}
	

	}

	$total = new Calculator( $_GET["age"], $_GET["name"], $_GET["slept"]);

	



	echo $total->TotalHours();
} else {
?>
<form action="calc.php" method="get">
	<input type="text" placeholder="name" name="name"/>
	<input type="number" placeholder = "age" name="age"/>
	<input type="number" placeholder = "hours slept per night" name="slept" />
	<input type="submit"/>
</form>

<?php }
?>

