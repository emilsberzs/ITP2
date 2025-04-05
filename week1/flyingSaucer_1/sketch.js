//Topic 1.1 
//Object orientation revisted
//part one





function setup()
{
    createCanvas(800,600);
    noStroke();

    flying_saucer = {
        x: 400,
        y: 150,
        width: 200,
        height: 50,
        num_lights:19,
        size_lights:7,
        brightnesses: []
    }

    for(var i=0;i < flying_saucer.num_lights;i++)
    {
        flying_saucer.brightnesses.push((i * 10)%255)
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    //dome
    arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width/2,
        flying_saucer.height*2,
        PI,TWO_PI)
    fill(150);
    //top part
    arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height,
        PI,TWO_PI);
    fill(50);

    //bottom part
    arc(flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height,
        0,PI);
    
    //wiggle
    flying_saucer.x += random(-2,2);
    flying_saucer.y += random(-2,2);
    
    fill(255)

    let incr = flying_saucer.width/(flying_saucer.num_lights-1);
    //lights
    for(var i = 0; i<flying_saucer.num_lights;i++)
    {
        fill(flying_saucer.brightnesses[i])
        ellipse(flying_saucer.x - flying_saucer.width/2 + incr*i, 
            flying_saucer.y,
            flying_saucer.size_lights)
        flying_saucer.brightnesses[i] +=3;
        flying_saucer.brightnesses[i] = flying_saucer.brightnesses[i]%255;

    }
}