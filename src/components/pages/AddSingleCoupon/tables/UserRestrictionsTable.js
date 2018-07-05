/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the User Restrictions Table component.
 * James Abaja          7/5/18   Renamed file name and exported component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const UserRestrictionsTable = (props) => {
  return(
    <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
      <thead>
        <tr>
          <th>USER RESTRICTIONS</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {props.location !== '' && <tr>
          <th>Location/s</th>
          <td>{props.location}</td>
        </tr>}
        {props.company !== '' && <tr>
          <th>Company</th>
          <td>{props.company}</td>
        </tr>}
        {props.userUseLimit !== '' && <tr>
          <th>Uses per User</th>
          <td>{props.userUseLimit}</td>
        </tr>}
        <tr>
          <th>First-time users only?</th>
          <td>{props.firstTime ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserRestrictionsTable;