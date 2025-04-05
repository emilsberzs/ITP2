//Topic 1.1 
//Object orientation revisted
//part two

var flyingSaucers;

function setup()
{
    createCanvas(1500,600);
    noStroke();
    flyingSaucers=[];

    for(var i = 0;i < 5; i++)
    {
        flyingSaucers.push(new FlyingSaucer(100+i*200,100))
    }
    
    
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    for(var i = 0; i<flyingSaucers.length;i++)
    {
        flyingSaucers[i].hover()
        flyingSaucers[i].draw()
    }
    
}
//p5.js function
function keyPressed()
{
    FlyingSaucer.beam_on = true;
}

//p5.js function
function keyReleased()
{
    FlyingSaucer.beam_on = false;
}

function FlyingSaucer(x, y)
{
    this.x = x;
    this.y = y;
    this.width = random(200,300);
    this.height =random(75,125);
    this.window_width = random(0.5,0.8);
    this.window_height = random(0.5,1.5);
    this.base_height = random(0.3,0.6);
    this.num_lights = round(random(5,25));
    this.brightnesses = [];
    this.beam_on = false;

    this.hover = function()
    {
        this.x += random(-2,2);
        this.y += random(-2,2);
        if(!this.beam_on && random()>0.99)
        {
            this.beam_on = true
        }
        else if(this.beam_on && random()>0.01){
            this.beam_on = false;
        }
    };

    this.beam = function()
    {
        if(random()>0.1)
        {
        fill(255,255,100,150);
        beginShape();
        vertex(this.x-this.width*0.20, this.y);
        vertex(this.x+this.width*0.20, this.y);
        vertex(this.x+this.width*0.45, height-100);
        vertex(this.x-this.width*0.45, height-100);
        endShape(CLOSE);
        }
    };
    
    this.draw = function()
    {
        if(this.beam_on)
            {
                this.beam();
            }
            //draw the window
            fill(175,238,238);
            arc(
                this.x,
                this.y,
                this.width * this.window_width,
                this.height * this.window_height,
                PI,TWO_PI);
            
            //draw the body
            fill(150);
            arc(
                this.x,
                this.y,
                this.width,
                this.height/2,
                PI,TWO_PI);
            
            //draw the base
            fill(50);
            arc(
                this.x,
                this.y,
                this.width,
                this.height * this.base_height,
                0,PI);
            
            //draw the lights
            var incr = (this.width/(this.num_lights -1)); 
            
            for(var i = 0; i < this.num_lights; i++)
            {
                
                var x = this.x - this.width/2 + i * incr;
                fill(this.brightnesses[i]);
                ellipse(
                    x,
                    this.y,
                    5,
                    5
                )
                this.brightnesses[i] += 5;
                if(this.brightnesses[i] > 255)
                {
                    this.brightnesses[i] = 100;
                }
            }
    };

    for(var i = 0; i < this.num_lights; i++)
    {
        this.brightnesses.push((i * 20)%255);
    }
}
