timer = 100;
text = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\  '];
 
for(let char of text){
setTimeout(() => {
  process.stdout.write(char); 
}, timer);
timer += 200;
}


