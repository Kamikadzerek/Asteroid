Bullet.max = 5;

Bullet.all = {};

Bullet.speed = 0.022;

Bullet.count = 0;
Bullet.active_count = 0;

Bullet.life = 35;

function Bullet(){
	if(Bullet.active_count<Bullet.max){
		Bullet.count++;
		Bullet.active_count++

		this.id = Bullet.count.toString();
		Bullet.all[this.id] = this;

		this.life = 0;

		this.a = Game.ship.a;

		this.x = Game.ship.points[0].x;
		this.y = Game.ship.points[0].y;

		this.modX = Math.sin(Math.PI/180*this.a)*Bullet.speed*VAR.d;
		this.modY = -Math.cos(Math.PI/180*this.a)*Bullet.speed*VAR.d;
	}
}
Bullet.draw = function(){
	for (var b in Bullet.all){
		Bullet.all[b].x += Bullet.all[b].modX;
		Bullet.all[b].y += Bullet.all[b].modY;
		
		Game.ctx.beginPath();
		Game.ctx.arc(Bullet.all[b].x, Bullet.all[b].y, 3, 0, Math.PI/180*360);
		Game.ctx.closePath();
		Game.ctx.fill();
	}
};