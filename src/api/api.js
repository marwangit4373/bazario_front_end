const BASE_URL = 'http://localhost:5000';

export const register = async(username, email, password, profileImage) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, profileImage }), // جسم الطلب
    });
    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }
    return await response.json(); // استلام البيانات


  }
  catch (error) {
    console.error('Error during register:', error);
    throw error; // تمرير الخطأ للمكونات
  }
}




// دالة تسجيل الدخول
export const login = async (username, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }), // جسم الطلب
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    return await response.json(); // استلام البيانات
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // تمرير الخطأ للمكونات
  }
};
