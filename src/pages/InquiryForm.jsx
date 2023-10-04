import React, { useState } from 'react';
import './InquiryForm.css'; 
import { countries, state, products } from './Names';

// creating function InquiryForm()
function InquiryForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    countries: '',
    state: '',
    city: '',
    pincode: '',
    contactPerson: '',
    designation: '',
    department: '',
    email: '',
    contactNumber: '',
    whatsappNumber: '',
    wechatNumber: '',
    productType: '',
    qualitySwelling: '',
    qualityViscosity: '',
    qualityColor: '',
    qualityPlate: '',
    qualityFilterLoss: '',
    qualityMB: '',
    packingType: '',
    packingQty: '',
    packingQtyValue: '',
    deliveryMode: '',
    getsampleaddress: '',
    getSampleCity: '',
    getSamplePincode: '',
    notesRemarks: '',
    emailForQuotation: '',
  });

  // to handle changes like check/uncheck checkbox-handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //setFormData updates form data with new value entered
  };
  
  //handleSubmit handles the data which the user submits
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <p>Fill out below Inquiry-form and get Quotation on Email, * Fields are mandatory</p>
      <h3>Company Information</h3>

      {/* company information */}
      <div className="form-group">
        <label for="companyName"style={{ marginRight: '20px' }}>Name of Company*</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label for="companyAddress"style={{ marginRight: '20px'}}>Company Address*</label>
        <textarea
          type="text"
          id="companyAddress"
          name="companyAddress"
          placeholder="Address of Company"
          value={formData.companyAddress}
          onChange={handleChange}
          required
        />
        </div>
      <div className="form-group">
        <label for="countries" style={{ marginRight: '85px' }}>Country*</label>
        <select
        id="countries"
        name="countries"
        value={formData.countries}
        onChange={handleChange}
        required
    >
        {countries.map((countries, index) => (
        <option key={index} value={countries}>
            {countries}
        </option>
        ))}
        </select>
      </div>
      <div className="form-group">
        <label for="state"style={{ marginRight: '105px' }}>State*</label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          {state.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        
        <span style={{ marginLeft: '30px', marginRight: '30px' }}></span>

        <label for="city"style={{ marginRight: '55px' }}>City/Village*</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City/Village"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label for="pincode"style={{ marginRight: '5px' }}>Pin code or Zip code*</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>

      {/* contact information*/}
      <h3>Contact</h3>
      <div className="form-group">
        <label for="contactPerson"style={{ marginRight: '40px' }}>Contact Person*</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          placeholder="Contact Person Name"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label for="designation" style={{ marginRight: '60px' }}>Designation*</label>
        <input
          type="text"
          id="designation"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          required
          >
        </input>
        
        <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>

        <label for="department"style={{ marginRight: '60px' }}>Department*</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label for="email"style={{ marginRight: '100px' }}>Email*</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group">
        <label for="contactNumber"style={{ marginRight: '30px' }}>Contact Number*</label>
        <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            placeholder="9898595956"
            value={formData.contactNumber}
            onChange={handleChange}
            required
        />
        <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>
        
        <label for="whatsappNumber"style={{ marginRight: '10px' }}>WhatsApp Number*</label>
        <input
            type="number"
            id="whatsappNumber"
            name="whatsappNumber"
            placeholder="9898595956"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
        />
        </div>
        
        <div className="form-group">
        <label for="wechatNumber"style={{ marginRight: '25px' }}>We Chat Number*</label>
        <input
            type="number"
            id="wechatNumber"
            name="wechatNumber"
            placeholder="9898595956"
            value={formData.wechatNumber}
            onChange={handleChange}
            required
        />
        </div>

       {/* product information */}
        <h3>Product Information</h3>
        <div className="form-group">
            <label for="productType"style={{ marginRight: '20px' }}>Product Bentonite*</label>
            <select
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            required
            >
            <option value="">Select Type</option>
            <option value="powder">Powder</option>
            <option value="granules">Granules</option>
            <option value="lump">Lump</option>
            <option value="other">Other</option>
            </select>
        </div>
            <div>
              {products.map((product,index) => (
                <React.Fragment key={index}>
                  <label>
                    <input type="checkbox" name="product" value={product} /> {product}
                  </label>
                  {(index + 1) % 4 == 0 && <br />}
                </React.Fragment>
              ))}
            </div>

        {/* Product parameters */}
        <h3>Product Parameters</h3>
        <div className="form-group">
        <label for="qualitySwelling"style={{ marginRight: '10px' }}>Quality (Swelling)*</label>
        <input
            type="qualitySwelling"
            id="qualitySwelling"
            name="qualitySwelling"
            placeholder="Parameters of Swelling"
            value={formData.qualitySwelling}
            onChange={handleChange}
            required
        />

        <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>
        
        <label for="qualityViscosity">Quality (Viscosity)*</label>
        <input
            type="qualityViscosity"
            id="qualityViscosity"
            name="qualityViscosity"
            placeholder="Parameters of Vi"
            value={formData.qualityViscosity}
            onChange={handleChange}
            required
        />
       
       <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>

            <label for="qualityColor">Quality (Color)*</label>
            <select
            id="qualityColor"
            name="qualityColor"
            value={formData.qualityColor}
            onChange={handleChange}
            required
            >
            <option value="yellow">Yellow</option>
            <option value="cream">Cream</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div className="form-group">
        <label for="qualityPlate"style={{ marginRight: '35px' }}>Quality (Plate)*</label>
        <input
            type="qualityPlate"
            id="qualityPlate"
            name="qualityPlate"
            placeholder="Parameters of Plate"
            value={formData.qualityPlate}
            onChange={handleChange}
            required
        />

        <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>

        <label for="qualityFilterLoss">Quality (filter loss)*</label>
        <input
            type="qualityFilterLoss"
            id="qualityFilterLoss"
            name="qualityFilterLoss"
            placeholder="Parameters of Filterloss"
            value={formData.qualityFilterLoss}
            onChange={handleChange}
            required
        />
        
        <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>

        <label for="qualityMB">Quality (MB)*</label>
        <input
            type="qualityMB"
            id="qualityMB"
            name="qualityMB"
            placeholder="Parameters of MB"
            value={formData.qualityMB}
            onChange={handleChange}
            required
        />
        </div>

      {/* Packing & Delivery */}
      <h3>Packing & Delivery</h3>
      <div className="form-group">
            <label for="packingType"style={{ marginRight: '40px' }}>Packing Type*</label>
            <select
            id="packingType"
            name="packingType"
            value={formData.packingType}
            onChange={handleChange}
            required
            >
            <option value="select">Select</option>
            <option value="jumbo old">Jumbo OLD</option>
            <option value="jumbo new 1000 KG">Jumbo New 1000 KG</option>
            <option value="jumbo new 1200 KG">Jumbo New 1200 KG</option>
            <option value="paper new 22.5">Paper New 22.5 KG </option>
            <option value="paper new 25">Paper New 25 KG</option>
            <option value="PP OLD">PP OLD</option>
            <option value="PP New 25 KG">PP New 25 KG</option>
            <option value="PP New 60 KG">PP New 60 KG</option>
            </select>
        
            <span style={{ marginLeft: '30px', marginRight: '30px' }}></span>

            <label for="packingQty"style={{ marginRight: '45px' }}>Packing Qty*</label>
            <select
            id="packingQty"
            name="packingQty"
            value={formData.packingQty}
            onChange={handleChange}
            required
            >
            <option value="select">Select</option>
            <option value="total">Total</option>
            <option value="minimum">Minimum</option>
            <option value="pre-shipment">Pre-Shipment</option>
            </select>
        </div>
        <div className="form-group">
        <label for="packingQtyValue"style={{ marginRight: '10px' }}>Packing Qty Value*</label>
        <input
            type="packingQtyValue"
            id="packingQtyValue"
            name="packingQtyValue"
            placeholder="Packing Qty Value"
            value={formData.packingQtyValue}
            onChange={handleChange}
            required
        />
       
       <span style={{ marginLeft: '25px', marginRight: '25px' }}></span>

            <label for="deliveryMode"style={{ marginRight: '25px' }}>Delivery Mode*</label>
            <select
            id="deliveryMode"
            name="deliveryMode"
            value={formData.deliveryMode}
            onChange={handleChange}
            required
            >
            <option value="select">Select</option>
            <option value="local mode sea">Local Mode - Sea (Bost - 2835)</option>
            <option value="Local mode road">Local Mode - Road (Bost - 3815)</option>
            <option value="Local mode rack-load">Local Mode - Rack Load (BCN - 1700)</option>
            <option value="export mode">Export Mode - 20'Container</option>
            <option value="export mode-bulk">Export Mode - Bulk</option>
            <option value="export mode destination">Export Mode - Destination Port</option>
            </select>
        </div>

      {/* Get Sample */}
      <h3>Get Sample</h3>
      <div className="form-group">
        <label for="getsampleaddress"style={{ marginRight: '3px' }}>Get Sample on Address</label>
        <textarea
            type="getsampleaddress"
            id="getsampleaddress"
            name="getsampleaddress"
            value={formData.getsampleaddress}
            onChange={handleChange}
            required
        />
        </div>
        <div className="form-group">
        <label for="countries"style={{ marginRight: '100px' }}>Country</label>
        <select
        id="countries"
        name="countries"
        value={formData.countries}
        onChange={handleChange}
        required
    >
        {countries.map((countries, index) => (
        <option key={index} value={countries}>
            {countries}
        </option>
        ))}
        </select>
      </div>
      <div className="form-group">
        <label for="state"style={{ marginRight: '120px' }}>State</label>
        <select
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
    >
        {state.map((state, index) => (
        <option key={index} value={state}>
            {state}
        </option>
        ))}
        </select>
      </div>
      <div className="form-group">
        <label for="getSampleCity"style={{ marginRight: '75px' }}>City/Village</label>
        <input
          type="text"
          id="getSampleCity"
          name="getSampleCity"
          placeholder="City/Village"
          value={formData.getSampleCity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label for="pincode"style={{ marginRight: '20px' }}>Pin code or Zip code</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>

      {/* Other Information */}
      <h3>Other Information</h3>
      <div className="form-group">
        <label for="notesRemarks"style={{ marginRight: '50px' }}>Notes/Remarks</label>
        <textarea
          type="text"
          id="notesRemarks"
          name="notesRemarks"
          value={formData.notesRemarks}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <label for="emailForQuotation"style={{ marginRight: '10px' }}>Email For Quotation*</label>
        <input
          type="email"
          id="emailForQuotation"
          name="emailForQuotation"
          placeholder="Give Email to get Quotation"
          value={formData.emailForQuotation}
          onChange={handleChange}
          required
        />
        </div>

          {/* button for submitting the form */}
      <button type="submit">Send</button>
    </form>
  );
}
export default InquiryForm;

