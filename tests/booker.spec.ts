import { test, expect } from '@playwright/test';

test.describe('booker API', ()=>{

  test('Auth - CreateToken @auth', async({request})=>{
      const response = await request.post('https://restful-booker.herokuapp.com/auth', {
        headers: {'Content-Type': 'application/json'},
        data: { "username" : "admin", "password" : "password123"}
      });

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const data = await response.json();  
      expect(data).toHaveProperty('token');
  });

  test('Booking - GetBookingIds @booking_read', async({request})=>{
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json(); 
    for(let elem of data){
       expect(elem).toHaveProperty('bookingid');
    }
  });

  test('Booking - GetBookingIds Filter by checkin/checkout date @booking_read', async({request})=>{
    const checkin = '2014-03-13';
    const checkout = '2014-05-21';

    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking?checkin=${checkin}&checkout=${checkout}`
    );

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    for(let elem of data){
      expect(elem).toHaveProperty('bookingid');
    }
  });

  test('Booking - GetBookingIds Filter by name @booking_read', async({request})=>{
    const firstname = 'sally';
    const lastname= 'brown';

    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking?firstname=${firstname}&lastname=${lastname}`
    );

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    for(let elem of data){
      expect(elem).toHaveProperty('bookingid');
    }
  });

  test('Booking - GetBooking @booking_read', async({request})=>{

    const createResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
      headers: { 'Content-Type': 'application/json' },
      data: { 
        firstname: "Test", 
        lastname: "User", 
        totalprice: 100, 
        depositpaid: true, 
        bookingdates: { checkin: "2025-01-01", checkout: "2025-01-05" } 
      }
    });

    const createData = await createResponse.json();
    const id = createData.bookingid;

    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking/${id}`
    );

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('firstname');
    expect(data).toHaveProperty('lastname');
    expect(data).toHaveProperty('totalprice');
    expect(data).toHaveProperty('depositpaid');
    expect(data).toHaveProperty('bookingdates');
  });

  test('Booking - CreateBooking @booking_write', async({request})=>{
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      headers: {'Content-Type': 'application/json'},
      data: {
          firstname : "Jim",
          lastname : "Brown",
          totalprice : 111,
          depositpaid : true,
          bookingdates : {
              checkin : "2018-01-01",
              checkout : "2019-01-01"
          },
          additionalneeds : "Breakfast"
      }
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

});

test.describe ('With Auth Tests @auth', ()=>{

  let token: string;

  test.beforeEach(async({request})=>{
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
      headers: {'Content-Type': 'application/json'},
      data: { username : "admin", password : "password123"}
    });

    const data = await response.json();
    token = data.token;
  });

  test('Booking - UpdateBooking @booking_write', async({request})=>{
    // unchanged body
  });

  test('Booking- PartialUpdateBooking @booking_write', async ({ request })=>{
    // unchanged body
  });

  test('Booking- DeleteBooking @booking_write', async ({ request })=>{
    // unchanged body
  });

});

test('Ping - HealthCheck @ping', async ({ request })=>{
  const response = await request.get('https://restful-booker.herokuapp.com/ping');
  expect(response.status()).toBe(201);
});


 
    
   



  
 

      







    

 