import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('=== SANGHOON NOTI API - GET REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  console.log(req);
  // Query parameters
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log('Query Parameters:', queryParams);

  console.log('=== END GET REQUEST ===\n');

  return new Response(
    JSON.stringify({
      success: true,
      message: 'GET request received',
      data: {
        method: req.method,
        queryParams,
        timestamp: new Date().toISOString(),
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(req: NextRequest) {
  console.log('=== SANGHOON NOTI API - POST REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  // Query parameters
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log('Query Parameters:', queryParams);

  // Request body
  let body = null;
  try {
    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (contentType?.includes('application/json')) {
      body = await req.json();
      console.log('JSON Body:', body);
    } else if (contentType?.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      const formObject = Object.fromEntries(formData.entries());
      body = formObject;
      console.log('Form Data:', formObject);
    } else if (contentType?.includes('text/')) {
      body = await req.text();
      console.log('Text Body:', body);
    } else {
      // Try to read as text for other content types
      body = await req.text();
      console.log('Raw Body:', body);
    }
  } catch (error) {
    console.log('Error reading body:', error);
    body = 'Error reading request body';
  }

  console.log('=== END POST REQUEST ===\n');

  return new Response(
    JSON.stringify({
      success: true,
      message: 'POST request received',
      data: {
        method: req.method,
        queryParams,
        body,
        timestamp: new Date().toISOString(),
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function PUT(req: NextRequest) {
  console.log('=== SANGHOON NOTI API - PUT REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  // Query parameters
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log('Query Parameters:', queryParams);

  // Request body
  let body = null;
  try {
    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (contentType?.includes('application/json')) {
      body = await req.json();
      console.log('JSON Body:', body);
    } else {
      body = await req.text();
      console.log('Raw Body:', body);
    }
  } catch (error) {
    console.log('Error reading body:', error);
    body = 'Error reading request body';
  }

  console.log('=== END PUT REQUEST ===\n');

  return new Response(
    JSON.stringify({
      success: true,
      message: 'PUT request received',
      data: {
        method: req.method,
        queryParams,
        body,
        timestamp: new Date().toISOString(),
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function DELETE(req: NextRequest) {
  console.log('=== SANGHOON NOTI API - DELETE REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  // Query parameters
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log('Query Parameters:', queryParams);

  console.log('=== END DELETE REQUEST ===\n');

  return new Response(
    JSON.stringify({
      success: true,
      message: 'DELETE request received',
      data: {
        method: req.method,
        queryParams,
        timestamp: new Date().toISOString(),
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// Handle other HTTP methods
export async function PATCH(req: NextRequest) {
  console.log('=== SANGHOON NOTI API - PATCH REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  // Query parameters
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams.entries());
  console.log('Query Parameters:', queryParams);

  // Request body
  let body = null;
  try {
    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (contentType?.includes('application/json')) {
      body = await req.json();
      console.log('JSON Body:', body);
    } else {
      body = await req.text();
      console.log('Raw Body:', body);
    }
  } catch (error) {
    console.log('Error reading body:', error);
    body = 'Error reading request body';
  }

  console.log('=== END PATCH REQUEST ===\n');

  return new Response(
    JSON.stringify({
      success: true,
      message: 'PATCH request received',
      data: {
        method: req.method,
        queryParams,
        body,
        timestamp: new Date().toISOString(),
      },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
