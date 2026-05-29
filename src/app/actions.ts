"use server";

import { prisma } from "@/lib/prisma";
import { COUNTRY_ROUTES, type CountryCode } from "@/content/countryRoutes";

export type SampleRequestInput = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: CountryCode;
  interest: string;
  message: string;
};

export type SampleRequestResult =
  | { ok: true; routedTo: string }
  | { ok: false; error: string };

/**
 * Persists a contact / sample-request brief and reports which local team it
 * was routed to. The contact form section wires its submit handler to this.
 */
export async function submitSampleRequest(
  input: SampleRequestInput,
): Promise<SampleRequestResult> {
  const firstName = input.firstName?.trim();
  const lastName = input.lastName?.trim();
  const company = input.company?.trim();
  const email = input.email?.trim();
  const message = input.message?.trim();

  if (!firstName || !lastName || !company || !email || !message) {
    return { ok: false, error: "Please complete all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid work email." };
  }

  const route = COUNTRY_ROUTES[input.country] ?? COUNTRY_ROUTES.OT;
  const routedTo = `${route.lead} · ${route.plant}`;

  await prisma.sampleRequest.create({
    data: {
      firstName,
      lastName,
      company,
      email,
      country: input.country,
      interest: input.interest,
      message,
      routedTo,
    },
  });

  return { ok: true, routedTo };
}
