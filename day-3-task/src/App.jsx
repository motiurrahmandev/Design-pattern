import Image from "../src/assets/photo.jpeg";
import Card from "./components/model/Model";
import Tabs from "./components/tab-model/Tab";

function App() {
  return (
    <div className="text-center min-h-screen flex gap-6 px-20 py-20">

      <Card>
        <Card.Image>
          <img src={Image} alt="" />
        </Card.Image>
        <Card.Header>
          <h1>Macbook Air</h1>
        </Card.Header>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            obcaecati?
          </p>
        </Card.Body>
        <Card.Footer>
          <button className="bg-pink-400 px-3 py-1 text-white rounded-2xl">Add to Cart</button>
          
        </Card.Footer>
      </Card>
    
     <div className="min-w-4xl mx-auto border rounded-lg shadow-sm">

      <Tabs defaultValue={0}>

        <Tabs.List>
          <Tabs.Tab index={0}>Home</Tabs.Tab>
          <Tabs.Tab index={1}>Profile</Tabs.Tab>
          <Tabs.Tab index={2}>Settings</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panels>
          <Tabs.Panel> Welcome Home!</Tabs.Panel>
          <Tabs.Panel> This is your Profile.</Tabs.Panel>
          <Tabs.Panel> Adjust your Settings here.</Tabs.Panel>
        </Tabs.Panels>

      </Tabs>
      </div>
     
    </div>
  );
}

export default App;
