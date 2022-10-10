const canvas = document.querySelector("canvas")
var c = canvas.getContext('2d')
var colors = ["#FD841F","#E14D2A","#CD104D","#9C2C77"]

class Circle {
	constructor(x, y, r, dx, dy, color){
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.r = r
		this.color = color
		this.draw = () => {
			c.beginPath()
			c.arc(this.x + this.dx,this.y + this.dy, this.r,Math.PI*2, false)
			c.fillStyle = color
			c.fill()
		}
		this.update = () => {
			if(this.x + this.r > canvas.width) {		
				this.dx = -this.dx
			}
			if(this.x - this.r < 0) {
				this.dx=-this.dx
			}
			if(this.y + this.r > canvas.height) {		
				this.dy=-this.dy
			}
			if(this.y - this.r < 0) {
				this.dy=-this.dy
			}
			this.x = this.x + this.dx
			this.y = this.y + this.dy

			this.draw()
		}
	}
	
}

var circlesArr = []

for(let i=0; i<10;i++){	
	let x = Math.floor(Math.random() * canvas.width)
	let y = Math.floor(Math.random() * canvas.height)
	let r = Math.random() * 10
	if(x+r > canvas.width) x=x-r
	if(x-r < 0) x=x+r
	if(y+r > canvas.width) y=y-r
	if(y-r < 0) y=y+r
	let dx = Math.random() * 4
	let dy = Math.random() * 4
	let color = colors[Math.round(Math.random() * colors.length - 1)]
	circlesArr.push(new Circle(x,y,r,dx, dy, color))
}

function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, canvas.width, canvas.height)

	for(let i=0; i<circlesArr.length; i++) {
		circlesArr[i].update()
	}
}
animate();