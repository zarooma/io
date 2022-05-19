    if (playerMovement.right && player.x < canvasWidth - player.width) {
    player.x += 4
  }
    
    if (playerMovement.up && player.y > 0) {
      player.y -= 4
    }
    if (playerMovement.down && player.y < canvasHeight - player.height) {
      player.y += 4
    }
  })


  socket.on("disconnect", () => {
    //When someone leaves, remove them from the gamestate
    delete gameState.players[socket.id]
  })
})

//Emit the gamestate to the clients 60 times / second
setInterval(() => {
  io.sockets.emit('state', gameState);
}, 1000 / 60);

//Start the server on port 3000
http.listen(3000, () => {
  console.log('listening on *:3000');
});
