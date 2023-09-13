import React, { useState } from 'react';
import './CustomCake.css';
import Address from './Address';
import FileBase64 from 'react-file-base64';


export default function CustomCake() {
 
    // Define a state variable for the selected cake design
    const [selectedValues, setSelectedValues] = useState({
      cakeDesign: '',
      cakeColor: '',
      cakeFlavor: '',
      cakeKg: '',
      cakeImg: '',
      cakeMessage: '',
      cakeDescription: '',
    });

  const [showAddress,setShowAddress] = useState(false)

  const handleSelectChange = (e) => {
    const name = e.target.name; // Get the name attribute from the select element
    const value = e.target.value; // Get the selected value
  
    setSelectedValues((selectedValues) => ({
      ...selectedValues,
      [name]: value,
    }));
  };
  
  console.log(selectedValues)
  const addressView =() =>{
    setShowAddress(true)
  }


  return (
    <div className="custom-cake-container">
      {(!showAddress)?
      <>
      <div className="image-container">
        <img src="/images/imgcc.jpg" alt="cakeimage" />
      </div>

      <div className="contact-form">
        <span className="heading">Custom Cake</span>
        <form>
          <div className="row d-flex">
          <div className="form-group col-md-6">
              <label htmlFor="cakeDesign">Cake Design</label>

              <select id="cakeDesign" name="cakeDesign" className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example" value={selectedValues.cakeDesign} onChange={handleSelectChange}>
                  <option>Select Here</option>
                  <option value="classic-birthday">Classic Birthday Cake</option>
                  <option value="chocolate-lovers">Chocolate Lover's Cake</option>
                  <option value="fruit-topped">Fruit-Topped Cake</option>
                  <option value="floral">Floral Cake</option>
                  <option value="naked">Naked Cake</option>
                  <option value="marble">Marble Cake</option>
                  <option value="drip">Drip Cake</option>
                  <option value="geode">Geode Cake</option>
                  <option value="character">Character Cake</option>
                  <option value="tropical">Tropical Cake</option>
                  <option value="wedding">Wedding Cake</option>
                  <option value="cupcake-tower">Cupcake Tower</option>
                  <option value="ombre">Ombre Cake</option>
                  <option value="vintage">Vintage Cake</option>
                  <option value="garden">Garden Cake</option>
                  <option value="superhero">Superhero Cake</option>
                  <option value="rainbow">Rainbow Cake</option>
                  <option value="sports">Sports Cake</option>
                  <option value="cultural">Cultural Cake</option>
                  <option value="artistic-painting">Artistic Painting Cake</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cakeColor">Color</label>
              <select id="cakeColor" name="cakeColor" className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example" value={selectedValues.cakeColor} onChange={handleSelectChange}>
                <option>Select Here</option>
                <option value="classic-white">Classic White</option>
                <option value="chocolate-brown">Chocolate Brown</option>
                <option value="strawberry-red">Strawberry Red</option>
                <option value="vanilla-cream">Vanilla Cream</option>
                <option value="lemon-yellow">Lemon Yellow</option>
                <option value="blueberry-blue">Blueberry Blue</option>
                <option value="mint-green">Mint Green</option>
                <option value="lavender-purple">Lavender Purple</option>
                <option value="rose-pink">Rose Pink</option>
                <option value="caramel-gold">Caramel Gold</option>
                <option value="silver-gray">Silver Gray</option>
                <option value="royal-blue">Royal Blue</option>
                <option value="emerald-green">Emerald Green</option>
                <option value="sunset-orange">Sunset Orange</option>
                <option value="passion-fruit">Passion Fruit</option>
                <option value="coconut-cream">Coconut Cream</option>
                <option value="cherry-red">Cherry Red</option>
                <option value="midnight-black">Midnight Black</option>
                <option value="sunflower-yellow">Sunflower Yellow</option>
                <option value="ocean-blue">Ocean Blue</option>
                <option value="lavender-lilac">Lavender Lilac</option>
                <option value="bubblegum-pink">Bubblegum Pink</option>
                <option value="peachy-orange">Peachy Orange</option>
                <option value="lime-green">Lime Green</option>
                <option value="daisy-white">Daisy White</option>
                <option value="sapphire-blue">Sapphire Blue</option>
                <option value="ruby-red">Ruby Red</option>
                <option value="amethyst-purple">Amethyst Purple</option>
                <option value="citrus-orange">Citrus Orange</option>
                <option value="ocean-mist-blue">Ocean Mist Blue</option>
                <option value="cherry-blossom-pink">Cherry Blossom Pink</option>
                <option value="mint-chip-green">Mint Chip Green</option>
                <option value="cotton-candy-pink">Cotton Candy Pink</option>
                <option value="cocoa-brown">Cocoa Brown</option>
                <option value="candy-apple-red">Candy Apple Red</option>
                <option value="honey-gold">Honey Gold</option>
                <option value="amethyst-lilac">Amethyst Lilac</option>
                <option value="buttercream-yellow">Buttercream Yellow</option>
                <option value="sky-blue">Sky Blue</option>
                <option value="peacock-blue">Peacock Blue</option>
                <option value="grape-purple">Grape Purple</option>
                <option value="watermelon-pink">Watermelon Pink</option>
                <option value="pistachio-green">Pistachio Green</option>

              </select>
            </div>
          </div>

          

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="cakeKg">Select KG</label>
              <select id="cakeKg" name="cakeKg" className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"value={selectedValues.cakeKg} onChange={handleSelectChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                <option value="3">6</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="cakeFlaver">Flavors</label>
              <select id="cakeFlavor" name="cakeFlavor" className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"value={selectedValues.cakeFlavor} onChange={handleSelectChange}>
                <option >Select Here</option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="strawberry">Strawberry</option>
                <option value="lemon">Lemon</option>
                <option value="red-velvet">Red Velvet</option>
                <option value="carrot">Carrot</option>
                <option value="coconut">Coconut</option>
                <option value="marble">Marble</option>
                <option value="funfetti">Funfetti</option>
                <option value="coffee">Coffee</option>
                <option value="caramel">Caramel</option>
                <option value="almond">Almond</option>
                <option value="banana">Banana</option>
                <option value="pineapple">Pineapple</option>
                <option value="blueberry">Blueberry</option>
                <option value="raspberry">Raspberry</option>
                <option value="cherry">Cherry</option>
                <option value="cookies-and-cream">Cookies and Cream</option>
                <option value="peanut-butter">Peanut Butter</option>
                <option value="mint-chocolate">Mint Chocolate</option>
                <option value="cinnamon">Cinnamon</option>
                <option value="hazelnut">Hazelnut</option>
                <option value="strawberry-banana">Strawberry Banana</option>
                <option value="orange">Orange</option>
              </select>
            </div>
          </div>
          <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="message">Message</label><br/>
              <input type="text" id="cakeMessage" name="cakeMessage" required="" placeholder='Ex: Happy Brithday Rock' value={selectedValues.cakeMessage} onChange={handleSelectChange} />
         </div>
            <div className="form-group col-md-6">
              <label htmlFor="reference">Reference Image</label>
              {/* <select id="reference" name="reference" className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example">
                <option value="option1">Choice X</option>
                <option value="option2">Choice Y</option>
                <option value="option3">Choice Z</option>
              </select> */}
              <FileBase64
              type="file"
              multiple={false}
              onDone={({base64}) => setSelectedValues({ ...selectedValues,selectedFile:base64})}
              />
               {/* onDone={ this.getFiles.bind(this) } */}
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="discription">Design description</label>
            <textarea id="cakeDescription" name="cakeDescription" required="" placeholder='Tell us more about your design' value={selectedValues.cakeDescription} onChange={handleSelectChange}></textarea>
           </div>
                    <button type="button" onClick={addressView} >Submit</button>
        </form>
      </div>
    </>
    :
    <Address setShowAddress={setShowAddress} showAddress={showAddress} selectedValues={selectedValues} setSelectedValues={setSelectedValues}/>
      }
    </div>
  );
}
