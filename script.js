const quotes =  [

{
       "quote":"There is only one god and his name is Death, and there is only one thing we say to Death: 'Not today.'","author":"Syrio Forel "},
{
       "quote":"Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some, are given a chance to climb. They refuse, they cling to the realm or the gods or love. Illusions. Only the ladder is real. The climb is all there is.","author":"Littlefinger"},
{
       "quote":"You know nothing, Jon Snow.","author":"Ygritte"},
{
       "quote":"Winter is coming.","author":"Eddard Stark"},
{
       "quote":"When you play the game of thrones, you win or you die. There is no middle ground.","author":"Cersei Lannister"},
{
       "quote":"The lone wolf dies but the pack survives.","author":"Eddard Stark"},
{
       "quote":"Power resides where men believe it resides. It’s a trick, a shadow on the wall. And, a very small man can cast a very large shadow.","author":"Lord Varys"},
{
       "quote":"A lion doesn’t concern himself with the opinions of a sheep.","author":"Tywin Lannister"},
{
       "quote":"The man who passes the sentence should swing the sword.","author":"Eddard Stark"},
{
       "quote":"Any man who must say ‘I am the king’ is no true king.","author":"Tywin Lannister"},
{
       "quote":"Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.","author":"Tyrion Lannister"},
{
       "quote":"Nothing fucks you harder than time.","author":"Ser Davos"},
{
       "quote":"The night is dark and full of terrors.","author":"Melisandre"},
{
       "quote":"The freedom to make my own mistakes was all I ever wanted.","author":"Mance Rayder"}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.author;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)