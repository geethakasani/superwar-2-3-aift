![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Create a functionality

Remember Superwars stage 1? However, here is a quick recap of things.

Dustin and Lucus are best friends. They spend their weekends watching superhero series and playing superhero games. One Friday at school Mr.Hooper, their computer science faculty taught them HTML, CSS, and JavaScript. Dustin & Lucus realised they could build super cool super hero stuff using their knowledge.

The subsequent weekend, they decided to do it. Lucus and Dustin are now all set to build something super cool.

Lucus always loves protagonists like most of us. But Dustin is quite crazy, he likes antagonists. So they decided to collect a bunch of their favorite Super Heroes and Super Villains names along with their pictures. Did they tell you about the game that they are gonna build?

Okay, let us explain. They are going to facilitate the ultimate war between Super Heroes and Super Villains. As they are new to these technologies, they need a **Kalvian** to help them build this game.

## Starter code

The `src/app.js` contains an array of 20 Super Heroes and Super-Villains. We are talking about the array of 20 _strings_ containing each Super Heroes and Super-Villains names. Here is one example of how the data is displayed:

```javascript
[
    "Spiderman"
]
```

### Progression 1: More players, more fun

Dustin and Lucus wants to create players.In `initPlayers()`, loop through passed constant and create Objects, such that each player contains name, strength, image url and type.

- Use default `strength` as any number.
- `image` can be sequential i.e. "images/super-"+(i+1)+".png"
- `type` of player can alternating between hero and villain or your own logic
- It should _return an array_ of player objects.
  ```javascript
  [
      {
          name:"Super Man",
          strength:100,
          image:"url",
          type:"hero|villain"
      }
  ]
  ```

### Progression 2: Courage is grace

Add your logic in `getRandomStrength()` method, such that it should _return a random strength_ from 1 to 100. The strength is what is gonna decide the winner.

### Progression 3: No player should fall

In `buildPlayers()`, loop through the created JSON objects and accumulate HTML template as below and _return HTML element_.

```JS
<div class="player">
   <img src="${players[i].image}">
   <div class="name">${players[i].name}</div>
   <div class="strength">${players[i].strength}</div>
</div>
```

## Expected Output

![Superwars](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/superwars-basic1.png)
![Superwars](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/superwar/superwars-basic2.png)


Happy Coding Kalvium ❤️
