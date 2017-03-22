<?php
	$page_class = "_assessment-tool wh-logo"; // Variable to add class to the body tag, must be added before including the header
    include "../includes/header.html"; //including the header section
?>
<div class="row lg-content-head sm-content-head">	
	  <div class="aeBanner" data-stellar-background-ratio="0.5">
	  		<div class="large-10 small-centered small-10 columns text-center first-block">
	  			<h1>Assessment Engine</h1>
	  			<p>Open-source by Söoryen</p>					
	  		</div>
		</div>
</div>
<div class="border-container">
	<div class="row">
		<?php include "assessmentEngine.html"; ?>
	</div>
</div>

<?php include "../includes/footer.html"; ?>