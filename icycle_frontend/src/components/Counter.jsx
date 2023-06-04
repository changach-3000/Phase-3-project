import React from 'react'

function Counter() {
  return (
    <div>
        <section id="counter" class="sec-padding">
		<div class="container">
			<div class="row">
           
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">26</p>
						<h4>Routes</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">85</p>
						<h4>Cyclists</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">896 km</p>
						<h4>Average distance covered</h4> </div>
				</div>
				<div class="col-md-3 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">777 hrs</p>
						<h4>Total time cycled</h4> </div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Counter