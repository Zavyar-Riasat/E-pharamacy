import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';
import User from '@/models/User';
import { getDataFromToken } from '@/lib/getDataFromToken';

// GET: Get all orders for the authenticated user
export async function GET(req) {
  await dbConnect();
  try {
    const userId = await getDataFromToken(req);
    if (!userId) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    // Fetch user to check admin
    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    let orders;
    if (user.isAdmin) {
      // Admin: get all orders
      orders = await Order.find({}).sort({ createdAt: -1 });
    } else {
      // Regular user: get only their orders
      orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    }
    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// POST: Create a new order
export async function POST(req) {
  await dbConnect();
  try {
    const userId = await getDataFromToken(req);
    if (!userId) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      deliveryMethod
    } = body;
    if (!orderItems || orderItems.length === 0) {
      return NextResponse.json({ success: false, message: 'No order items' }, { status: 400 });
    }
    const order = await Order.create({
      user: userId,
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      deliveryMethod
    });
    return NextResponse.json({ success: true, data: order }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
