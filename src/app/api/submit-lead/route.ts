import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, notes, whatsapp } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "VM Studio <onboarding@resend.dev>",
      to: "vmstudio.online@gmail.com",
      replyTo: email,
      subject: `Nueva consulta de ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #111827; margin-top: 0;">Nueva consulta desde vmstudio.online</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; color: #111827; font-size: 15px;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Empresa</td>
              <td style="padding: 8px 0; color: #111827; font-size: 15px;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0; color: #111827; font-size: 15px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Teléfono</td>
              <td style="padding: 8px 0; color: #111827; font-size: 15px;">${phone}</td>
            </tr>` : ""}
            ${notes ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0; color: #111827; font-size: 15px; white-space: pre-line;">${notes}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Responder por WhatsApp</td>
              <td style="padding: 8px 0; font-size: 15px; font-weight: bold; color: ${whatsapp === 'si' ? '#16a34a' : whatsapp === 'no' ? '#dc2626' : '#9ca3af'};">
                ${whatsapp === 'si' ? '✅ SÍ' : whatsapp === 'no' ? '❌ NO' : '— No especificado'}
              </td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Podés responder directamente a este mail para contactar a ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
