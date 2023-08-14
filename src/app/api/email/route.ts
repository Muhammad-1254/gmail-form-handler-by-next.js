import { NextResponse, NextRequest } from 'next/server';
import { sendEmail } from '@/helper/email';

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const user = await request.json();

    await sendEmail({
      reciverEmail: user.email,
      subject: user.company,
      text: user.message,
    });

    return NextResponse.json(
      {
        message: 'check you email',
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: 'error happen',
        error,
      },
      { status: 500 }
    );
  }
};
