(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height =canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		function Particle(){
			this.y = Math.random()*height;
			this.x = Math.random()*width;

			this.radius = Math.random()*5;

			this.draw = function(){
				canvas.beginPath();
				canvas.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				canvas.closePath();
				canvas.fillStyle = '#333';
				canvas.fill();
			}
		}

		let p1 = new Particle();
		let p2 = new Particle();
		let p3 = new Particle();

		p1.draw();
		p2.draw();
		p3.draw();

		const particlesArrey = [...Array(200)].map(() =>{
			let particle = new Particle();
			particle.draw();
			return particle;
		})

		debugger
	}
)()
