import React from 'react'

const Services = () => {
    return (
        <div>
            <form action="//submit.form" id="SignUp100" method="post" onsubmit="return ValidateForm(this);">
    <table border="0" cellpadding="5" cellspacing="0" width="600">
    <tr> <td>
    <label for="FirstName">First</label>, <label for="LastName">Last Name*:</label>
    </td> <td>
    <input name="FirstName" type="text" maxlength="60" style={{width:'100%',maxWidth: '146px'}} />
    <input name="LastName" type="text" maxlength="60" style={{width:'100%',maxWidth: '146px'}} />
    </td> </tr> <tr> <td>
    <label for="Organization">Organization:</label>
    </td> <td>
    <input name="Organization" type="text" maxlength="60" style={{width:'100%',maxWidth: '300px'}} />
    </td> </tr> <tr> <td>
    <label for="FromEmailAddress">Email address*:</label>
    </td> <td>
    <input name="FromEmailAddress" type="text" maxlength="60" style={{width:'100%',maxWidth: '300px'}} />
    </td> </tr> <tr> <td>
    <label for="WorkPhone">Work Phone:</label>
    </td> <td>
    <input name="WorkPhone" type="text" maxlength="43" style={{width:'100%',maxWidth: '250px'}} />
    </td> </tr> <tr> <td>
    <label for="HomePhone">Home Phone:</label>
    </td> <td>
    <input name="HomePhone" type="text" maxlength="43" style={{width:'100%',maxWidth: '250px'}} />
    </td> </tr> <tr> <td>
    <label for="CellPhone">Cell Phone:</label>
    </td> <td>
    <input name="CellPhone" type="text" maxlength="43" style={{width:'100%',maxWidth: '250px'}} />
    </td> </tr> <tr> <td>
    <label for="Fax">Fax:</label>
    </td> <td>
    <input name="Fax" type="text" maxlength="43" style={{width:'100%',maxWidth: '250px'}} />
    </td> </tr> <tr> <td>
    <label for="StreetAddress1">Address 1*:</label>
    </td> <td>
    <input name="StreetAddress1" type="text" maxlength="120" style={{width:'100%',maxWidth: '350px'}} />
    </td> </tr> <tr> <td>
    <label for="StreetAddress2">Address 2:</label>
    </td> <td>
    <input name="StreetAddress2" type="text" maxlength="120" style={{width:'100%',maxWidth: '350px'}} />
    </td> </tr> <tr> <td>
    <label for="City">City*:</label>
    </td> <td>
    <input name="City" type="text" maxlength="120" style={{width:'100%',maxWidth: '300px'}} />
    </td> </tr> <tr> <td>
    <label for="State">State/Province:</label>
    </td> <td>
    <input name="State" type="text" maxlength="120" style={{width:'100%',maxWidth: '300px'}} />
    </td> </tr> <tr> <td>
    <label for="Zip">Zip/Postal Code:</label>
    </td> <td>
    <input name="Zip" type="text" maxlength="30" style={{width:'100%',maxWidth: '100px'}} />
    </td> </tr> <tr> <td>
    <label for="Country">Country*:</label>
    </td> <td>
    <input name="Country" type="text" maxlength="120" style={{width:'100%',maxWidth: '300px'}} />
    </td> </tr> <tr> <td>
    * - required fields
    </td> <td>
    
    
    <input name="skip_Submit" type="submit" value="Submit" />
    </td> </tr>
    </table>
    </form>
        </div>
    )
}

export default Services
