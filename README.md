
### 1️⃣ Public Landing Section
- **Home Page** – Landing page introducing the parcel delivery service  
- **Track Parcel** – Parcel inquiry form for users to track shipment status
- **Features** –  Highlights of the service’s key offerings and benefits
- **FAQ** – Frequently asked questions with clear, concise answers
- **Contact** – Contact form and company information for user inquiries
- **About Page** – Information about the company, mission, and team

---

### 2️⃣ Authentication
- Login & Registration with JWT authentication  
- Role-based redirection (**Sender/Receiver/Admin**)  
- Persisted authentication (remains logged in after refresh)  
- Logout  

---

### 3️⃣ Sender Dashboard
- Create parcel delivery requests  
- Cancel parcel (if not dispatched)  
- Accept return parcel (if receiver return the parcel)  
- View all created parcels & statuses  

---

### 4️⃣ Receiver Dashboard
- View all parcels  
- View incoming parcels  
- View delivery history
- Receive or return parcels after delivery only available in Delivered parcel page 

---

### 5️⃣ Admin Dashboard
- Manage users (block/unblock)  
- Manage parcels (block/unblock, update status)
- Pagination for users and parcels

---

### 6️⃣ Parcel Tracking
- Unique tracking ID for each parcel  
- Public or authenticated search by tracking ID  
- Status logs (status, timestamp, updatedBy, notes)  

---

### 7️⃣ General Features
- Role-based navigation  
- Loading indicators & global error handling  
- Form validations (required fields, numeric checks, etc.)  
- Advanced filtering & pagination
- Lazy loaders
- Toast notifications (success/error)  
- Responsive design (mobile-friendly, clean typography, accessible colors)  

---

# Sample Login Details

Below are 3 sample accounts for testing the system:

| Role     | Email                  | Password       |
|----------|-----------------------|----------------|
| Admin    | super@gmail.com      | Super23@      |
| Sender   | sender@example.com     | Sender@123     |
| Receiver | receiver@example.com   | Receiver@123   |

> ⚠️ **Note:** These are test accounts for development purposes only. 
