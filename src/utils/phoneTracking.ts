// Phone number tracking configuration (canonical + click-tracking use same number)
export const CANONICAL_PHONE = "07445 115491";
export const CANONICAL_PHONE_TEL = "+447445115491";
export const TRACKING_PHONE = "+44 7445 115491";
export const TRACKING_PHONE_TEL = "+447445115491";

// Format phone number for display (preserves +44 and formats nicely)
export const formatTrackingPhone = (phone: string): string => {
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    if (cleaned.length === 10) {
      return "+44 " + cleaned.slice(0, 4) + " " + cleaned.slice(4);
    }
    return "+44 " + cleaned;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => {
  return formatTrackingPhone(TRACKING_PHONE);
};
