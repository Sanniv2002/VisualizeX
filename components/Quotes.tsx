export default function Quotes() {
    //You can add new and meaningful Quotes here
  const dataQuotes = [
    "Data is the new oil. - Clive Humby",
    "The world is one big data problem. - Andrew McAfee",
    "Without big data, you are blind and deaf and in the middle of a freeway. - Geoffrey Moore",
    "Information is the oil of the 21st century, and analytics is the combustion engine. - Peter Sondergaard",
    "Data really powers everything that we do. - Jeff Weiner",
    "Data are just summaries of thousands of stories – tell a few of those stories to help make the data meaningful. - Chip Heath",
    "Torture the data, and it will confess to anything. - Ronald Coase",
    "You can have data without information, but you cannot have information without data. - Daniel Keys Moran",
    "The goal is to turn data into information, and information into insight. - Carly Fiorina",
    "Data beats emotions. - Sean Rad",
    "Data-driven beats hip-shot. - Peter Sondergaard",
    "Numbers have an important story to tell. They rely on you to give them a clear and convincing voice. - Stephen Few",
    "The world is now awash in data, and we can see consumers in a lot clearer ways. - Max Levchin",
    "Data will talk to you if you’re willing to listen. - Jim Bergeson",
    "With too little data, you won’t be able to make any conclusions that you trust. With loads of data you will find relationships that aren’t real… Big data isn’t about bits, it’s about talent. - Douglas Merrill",
    "The data fabric is the next middleware. - Mike Gualtieri",
    "Data is a precious thing and will last longer than the systems themselves. - Tim Berners-Lee",
    "Data is the new science. Big data holds the answers. - Pat Gelsinger",
    "It is a capital mistake to theorize before one has data. - Arthur Conan Doyle",
    "What we have is a data glut. - Vernon Vinge",
    "The data is not in the kind of information being sent; the data is in the intensity of the connection. - Melvin Kranzberg",
    "Data that is loved tends to survive. - Kurt Bollacker",
    "Big data is at the foundation of all of the megatrends that are happening. - Chris Lynch",
    "Data is becoming the new raw material of business. - Craig Mundie",
    "We chose it because we deal with huge amounts of data. Besides, it sounds really cool. - Larry Page",
    "Data is a lot like humans: It is born. Matures. Gets married to other data, divorces, and remarries. - Vince Gennaro",
    "I think the most exciting thing is that you can build these models now for almost anything. - DJ Patil",
    "The world is now awash in data and we can see consumers in a lot clearer ways. - Max Levchin",
    "Data matures like wine, applications like fish. - James Governor",
    "The most valuable commodity I know of is information. - Gordon Gekko",
    "You can have data without information, but you cannot have information without data. - Daniel Keys Moran",
    "I keep saying that the sexy job in the next 10 years will be statisticians. People think I’m joking, but who would’ve guessed that computer engineers would’ve been the sexy job of the 1990s? - Hal Varian",
    "There is a sufficiency in the world for man’s need, but not for man’s greed. - Mahatma Gandhi",
    "It is a capital mistake to theorize before one has data. - Sir Arthur Conan Doyle",
    "Big data is not about the data. It’s about the insight that the data gives you. - DJ Patil",
    "The ability to take data — to be able to understand it, to process it, to extract value from it, to visualize it, to communicate it — that’s going to be a hugely important skill in the next decades. - Hal Varian",
    "The goal is to turn data into information and information into insight. - Carly Fiorina",
    "I visualize a time when we will be to robots what dogs are to humans, and I’m rooting for the machines. - Claude Shannon",
    "Information is the oil of the 21st century, and analytics is the combustion engine. - Peter Sondergaard",
    "The world is one big data problem. - Andrew McAfee",
    "Torture the data, and it will confess to anything. - Ronald Coase",
    "With data collection, ‘the sooner the better’ is always the best answer. - Marissa Mayer",
    "Data is a precious thing and will last longer than the systems themselves. - Tim Berners-Lee",
    "Data really powers everything that we do. - Jeff Weiner",
    "If you torture the data long enough, it will confess. - Ronald Coase",
    "Big data will replace the need for 80% of all doctors. - Vinod Khosla",
    "Data are just summaries of thousands of stories – tell a few of those stories to help make the data meaningful. - Chip Heath",
    "Data beats emotions. - Sean Rad",
    "The world is one big data problem. - Andrew McAfee",
    "Without big data, you are blind and deaf and in the middle of a freeway. - Geoffrey Moore",
    "It is a capital mistake to theorize before one has data. - Arthur Conan Doyle",
    "The goal is to turn data into information, and information into insight. - Carly Fiorina",
  ];

  // Return a random quote
  return (
    <div>
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-600">
        {dataQuotes[Math.floor(Math.random() * dataQuotes.length)]}
      </p>
    </div>
  );
}
