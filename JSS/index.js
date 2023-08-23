console.log('Your index.js file is loaded correctly');

const nameEl = document.getElementById('name');
// :point_down:️ Change text color on mouseover
nameEl.addEventListener('mouseover', function handleMouseOver() {
  nameEl.style.color = 'red';
});
// :point_down:️ Change text color back on mouseout
nameEl.addEventListener('mouseout', function handleMouseOut() {
  nameEl.style.color = 'black';
});
const designEl = document.getElementById('design');
// :point_down:️ Change text color on mouseover
designEl.addEventListener('mouseover', function handleMouseOver() {
  designEl.style.color = 'blue';
});
// :point_down:️ Change text color back on mouseout
designEl.addEventListener('mouseout', function handleMouseOut() {
  designEl.style.color = 'black';
});

const travelEl = document.getElementById('travel')

travelEl.addEventListener('mouseover', function handleMouseOver() {
  travelEl.style.color = 'yellow';
})

travelEl.addEventListener('mouseout', function handleMouseOut(){
  travelEl.style.color = 'black';
})


const loveEl = document.getElementById('love')

loveEl.addEventListener('mouseover', function handleMouseOver() {
  loveEl.style.color = 'green';
})

loveEl.addEventListener('mouseout', function handleMouseOut() {
  loveEl.style.color = 'black'
})

