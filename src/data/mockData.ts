import { FoundItem, LostReport, ClaimRequest, StorageBoxUnit, StorageSlot, AuditLogEntry, AppNotification } from "../types";

export const INITIAL_FOUND_ITEMS: FoundItem[] = [
  {
    id: "LF-2026-0042",
    title: "Black Jansport Backpack",
    itemType: "Backpack",
    category: "Bags & Backpacks",
    description: "Black classic Jansport backpack with blue carabiner keychain and small white zipper pull on the front organizer pouch.",
    color: "Black",
    brand: "Jansport",
    identifyingCharacteristics: "Blue aluminum carabiner keychain with brass residence key, small paint spot on base bottom right.",
    foundLocation: "City Public Library - 2nd Floor Reading Hall",
    foundDate: "2026-08-12",
    surrenderedBy: "LGU Desk Officer: Marcus Vance (Public Library)",
    storageBoxId: "BOX-A",
    storageSlotId: "B3",
    status: "claim_pending",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0042|BOX-A-B3|Jansport-Black",
    createdAt: "2026-08-12T14:30:00Z"
  },
  {
    id: "LF-2026-0038",
    title: "Navy Hydro Flask 32oz",
    itemType: "Water Bottle",
    category: "Bottles & Containers",
    description: "Navy blue Hydro Flask 32oz wide mouth insulated tumbler with straw lid and yellow mountain graphic vinyl sticker.",
    color: "Navy Blue",
    brand: "Hydro Flask",
    identifyingCharacteristics: "Yellow Yosemite National Park vinyl sticker, minor scuff around bottom rim bumper.",
    foundLocation: "City Hall Plaza - Food Pavilion Table #14",
    foundDate: "2026-08-11",
    surrenderedBy: "Facility Staff: Elena Gomez",
    storageBoxId: "BOX-A",
    storageSlotId: "A2",
    status: "unclaimed",
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0038|BOX-A-A2|HydroFlask-Navy",
    createdAt: "2026-08-11T16:15:00Z"
  },
  {
    id: "LF-2026-0039",
    title: "Apple AirPods Pro (2nd Gen)",
    itemType: "Earbuds / Electronics",
    category: "Electronics",
    description: "White Apple AirPods Pro charging case enclosed inside a matte black Spigen rugged armor case with lanyard loop.",
    color: "White / Black Case",
    brand: "Apple",
    identifyingCharacteristics: "Matte black Spigen rubber case with small brass ring. Case named 'Alex's Pods' on Bluetooth scan.",
    foundLocation: "Municipal Sports Complex - East Bleachers Section 3",
    foundDate: "2026-08-13",
    surrenderedBy: "Recreation Officer Tyler Jenkins",
    storageBoxId: "BOX-A",
    storageSlotId: "C1",
    status: "ready_for_retrieval",
    imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0039|BOX-A-C1|Apple-AirPods",
    createdAt: "2026-08-13T10:00:00Z"
  },
  {
    id: "LF-2026-0040",
    title: "TI-84 Plus CE Calculator",
    itemType: "Calculator",
    category: "Electronics",
    description: "Texas Instruments graphing calculator in Rose Gold / Rose metallic shell with slide cover.",
    color: "Rose Gold",
    brand: "Texas Instruments",
    identifyingCharacteristics: "Discreet laser engraving 'E.T. 2026' on rear top corner, charged battery indicator.",
    foundLocation: "Civic Youth & Training Center - Room 204",
    foundDate: "2026-08-14",
    surrenderedBy: "Civic Center Staff: Dr. Aris Thorne",
    storageBoxId: "BOX-B",
    storageSlotId: "A1",
    status: "unclaimed",
    imageUrl: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0040|BOX-B-A1|TI84-RoseGold",
    createdAt: "2026-08-14T11:20:00Z"
  },
  {
    id: "LF-2026-0041",
    title: "Dark Denim Jacket with Enamel Pins",
    itemType: "Jacket",
    category: "Apparel & Accessories",
    description: "Dark wash Levi's trucker jacket with three astronomy enamel pins on the left lapel.",
    color: "Dark Blue / Indigo",
    brand: "Levi's",
    identifyingCharacteristics: "Pins: NASA meatball logo, Saturn with gold rings, and a glowing moon pin.",
    foundLocation: "Municipal Performing Arts & Cultural Center - Row F",
    foundDate: "2026-08-10",
    surrenderedBy: "Community Center Coordinator: Jordan K.",
    storageBoxId: "BOX-B",
    storageSlotId: "B2",
    status: "unclaimed",
    imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0041|BOX-B-B2|Levis-Denim",
    createdAt: "2026-08-10T19:40:00Z"
  },
  {
    id: "LF-2026-0043",
    title: "Keychain Lanyard with Car Keys & Civic Badge",
    itemType: "Keys & Badges",
    category: "Keys & Badges",
    description: "Royal blue lanyard with Honda smart key fob, municipal locker key #314, and decorative acrylic charm.",
    color: "Royal Blue & Silver",
    brand: "Honda / Civic Transit",
    identifyingCharacteristics: "Key fob for 2021 Civic, miniature Totoro acrylic keychain, brass master padlock key.",
    foundLocation: "Central Public Transport Terminal - Passenger Concourse",
    foundDate: "2026-08-15",
    surrenderedBy: "LGU Terminal Security Officer Vance",
    storageBoxId: "BOX-A",
    storageSlotId: "A3",
    status: "unclaimed",
    imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0043|BOX-A-A3|Lanyard-Honda",
    createdAt: "2026-08-15T17:10:00Z"
  },
  {
    id: "LF-2026-0044",
    title: "Grey Patagonia Better Sweater Fleece",
    itemType: "Fleece / Sweater",
    category: "Apparel & Accessories",
    description: "Heather grey quarter-zip fleece pullover, Size Medium, with civic volunteer ribbon in zipper pull.",
    color: "Heather Grey",
    brand: "Patagonia",
    identifyingCharacteristics: "Size M tag, faint blue ink pen mark on left cuff, gold zipper cord.",
    foundLocation: "City Hall South Wing - Public Service Lounge",
    foundDate: "2026-08-16",
    surrenderedBy: "LGU Staff: Rebecca Shaw",
    storageBoxId: "BOX-B",
    storageSlotId: "C3",
    status: "unclaimed",
    imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    qrCodeData: "LF-2026-0044|BOX-B-C3|Patagonia-Fleece",
    createdAt: "2026-08-16T13:45:00Z"
  }
];

export const INITIAL_LOST_REPORTS: LostReport[] = [
  {
    id: "REP-2026-018",
    studentName: "Maya Lin",
    studentId: "CTZ-2026-8941",
    email: "maya.lin@citymail.com",
    phone: "(555) 234-8901",
    rawDescription: "I lost a black Jansport backpack with a small blue keychain attached to the front pocket. I left it somewhere in the public library near the 2nd floor reading hall.",
    extractedAttributes: {
      itemType: "Backpack",
      color: "Black",
      brand: "Jansport",
      accessories: "Blue keychain / carabiner",
      distinguishingFeatures: "Small brass key attached, front organizer compartment",
      locationHint: "Public Library",
      tags: ["Backpack", "Black", "Jansport", "Blue Keychain", "Public Library"],
      confidence: "94% Match"
    },
    lostDate: "2026-08-12",
    estimatedLocation: "City Public Library - 2nd Floor Reading Area",
    status: "claim_submitted",
    matchedItemIds: ["LF-2026-0042"],
    createdAt: "2026-08-12T15:10:00Z"
  },
  {
    id: "REP-2026-017",
    studentName: "Lucas Rivera",
    studentId: "CTZ-2026-5120",
    email: "lucas.rivera@citymail.com",
    phone: "(555) 432-1980",
    rawDescription: "My navy Hydro Flask was left at the City Hall Plaza food pavilion around lunchtime. It has a yellow Yosemite sticker on it.",
    extractedAttributes: {
      itemType: "Water Bottle",
      color: "Navy Blue",
      brand: "Hydro Flask",
      accessories: "Yellow Yosemite sticker",
      distinguishingFeatures: "32oz capacity, straw lid, small bottom dent",
      locationHint: "City Hall Plaza",
      tags: ["Water Bottle", "Navy Blue", "Hydro Flask", "Yosemite Sticker"],
      confidence: "91% Match"
    },
    lostDate: "2026-08-11",
    estimatedLocation: "City Hall Plaza - Food Pavilion",
    status: "matched",
    matchedItemIds: ["LF-2026-0038"],
    createdAt: "2026-08-11T17:00:00Z"
  }
];

export const INITIAL_CLAIMS: ClaimRequest[] = [
  {
    id: "CLM-2026-0089",
    itemId: "LF-2026-0042",
    lostReportId: "REP-2026-018",
    claimantName: "Maya Lin",
    claimantId: "CTZ-2026-8941",
    claimantType: "Resident",
    contactEmail: "maya.lin@citymail.com",
    contactPhone: "(555) 234-8901",
    submittedDescription: "Black classic Jansport backpack with my blue carabiner and residence key. Inside there is a chemistry handbook, municipal transit card, and a blue pencil case.",
    proofOfOwnership: "Contains municipal transit card and notebook with my name 'Maya Lin' on inside cover, plus the residence key has #204 stamped on the back.",
    similarityScore: 92,
    status: "pending_review",
    submittedDate: "2026-08-12T16:00:00Z"
  },
  {
    id: "CLM-2026-0087",
    itemId: "LF-2026-0039",
    claimantName: "Alexander Hayes",
    claimantId: "CTZ-2026-4402",
    claimantType: "Resident",
    contactEmail: "alex.hayes@citymail.com",
    contactPhone: "(555) 887-2194",
    submittedDescription: "White AirPods Pro in black Spigen case. Bluetooth name is 'Alex's Pods'.",
    proofOfOwnership: "Can connect to device live and show matching serial number ending in 8X92 on Apple ID account.",
    similarityScore: 96,
    status: "ready_for_retrieval",
    submittedDate: "2026-08-13T11:00:00Z",
    reviewedBy: "LGU Admin: Sarah Chen",
    reviewedDate: "2026-08-13T14:30:00Z",
    rfidScanned: true,
    retrievalCode: "LF-RET-9412"
  }
];

const generateSlots = (boxId: string, occupiedMapping: Record<string, { itemId: string; status: "occupied" | "reserved" }>): StorageSlot[] => {
  const rows = ["A", "B", "C"];
  const cols = [1, 2, 3];
  const slots: StorageSlot[] = [];

  for (const row of rows) {
    for (const col of cols) {
      const slotId = `${row}${col}`;
      const mapping = occupiedMapping[slotId];
      slots.push({
        id: slotId,
        boxId,
        row,
        col,
        status: mapping ? mapping.status : "available",
        currentLFId: mapping ? mapping.itemId : undefined,
        isDoorLocked: true,
        lastOpenedAt: mapping ? "2026-08-14T09:00:00Z" : undefined
      });
    }
  }
  return slots;
};

export const INITIAL_STORAGE_BOXES: StorageBoxUnit[] = [
  {
    id: "BOX-A",
    name: "LGU Smart Locker Unit A",
    locationName: "City Hall Main Lobby - Public Assistance Center",
    isOnline: true,
    masterLockStatus: "locked",
    totalSlots: 9,
    temperatureCelsius: 21.4,
    lastSyncTime: "Just now (Live IoT Heartbeat)",
    slots: generateSlots("BOX-A", {
      "A2": { itemId: "LF-2026-0038", status: "occupied" },
      "A3": { itemId: "LF-2026-0043", status: "occupied" },
      "B3": { itemId: "LF-2026-0042", status: "reserved" },
      "C1": { itemId: "LF-2026-0039", status: "reserved" }
    })
  },
  {
    id: "BOX-B",
    name: "LGU Smart Locker Unit B",
    locationName: "Integrated Public Terminal & Civic Center",
    isOnline: true,
    masterLockStatus: "locked",
    totalSlots: 9,
    temperatureCelsius: 22.1,
    lastSyncTime: "Just now (Live IoT Heartbeat)",
    slots: generateSlots("BOX-B", {
      "A1": { itemId: "LF-2026-0040", status: "occupied" },
      "B2": { itemId: "LF-2026-0041", status: "occupied" },
      "C3": { itemId: "LF-2026-0044", status: "occupied" }
    })
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: "LOG-1049",
    timestamp: "2026-08-16 13:45",
    user: "LGU Officer: Rebecca Shaw",
    role: "LGU Desk Officer",
    action: "ITEM_REGISTERED",
    itemId: "LF-2026-0044",
    details: "Registered Grey Patagonia Fleece -> Assigned to Locker BOX-B Slot C3.",
    device: "LGU Terminal 1",
    result: "Success"
  },
  {
    id: "LOG-1048",
    timestamp: "2026-08-15 17:12",
    user: "Public Security: Officer Vance",
    role: "Terminal Security",
    action: "SLOT_ASSIGNED",
    itemId: "LF-2026-0043",
    details: "Locker Door BOX-A A3 locked after storing Honda Car Key & Lanyard.",
    device: "Physical Locker A Keypad",
    result: "Success"
  },
  {
    id: "LOG-1047",
    timestamp: "2026-08-13 14:30",
    user: "LGU Admin: Sarah Chen",
    role: "LGU Administrator",
    action: "CLAIM_APPROVED",
    itemId: "LF-2026-0039",
    claimId: "CLM-2026-0087",
    details: "Verified citizen Alexander Hayes (CTZ-2026-4402) via Bluetooth device matching. Ready for locker retrieval.",
    device: "LGU Admin Portal Web",
    result: "Success"
  },
  {
    id: "LOG-1046",
    timestamp: "2026-08-12 16:00",
    user: "Citizen: Maya Lin",
    role: "Citizen",
    action: "CLAIM_SUBMITTED",
    itemId: "LF-2026-0042",
    claimId: "CLM-2026-0089",
    details: "Citizen submitted retrieval claim for Black Jansport Backpack following 92% AI match.",
    device: "Citizen Portal Mobile",
    result: "Pending"
  },
  {
    id: "LOG-1045",
    timestamp: "2026-08-12 14:35",
    user: "LGU Officer: Marcus Vance",
    role: "LGU Desk Officer",
    action: "ITEM_REGISTERED",
    itemId: "LF-2026-0042",
    details: "Surrendered Black Jansport Backpack. QR code generated and assigned to Locker BOX-A Slot B3.",
    device: "Library Desk Terminal",
    result: "Success"
  }
];

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: "NOTIF-01",
    title: "High-Confidence Match Detected (92%)",
    message: "A potential match was identified for your reported lost Black Jansport Backpack in LGU inventory.",
    timestamp: "10 mins ago",
    read: false,
    type: "match_found",
    recipientRole: "student",
    relatedItemId: "LF-2026-0042"
  },
  {
    id: "NOTIF-02",
    title: "Item Ready for Physical Retrieval",
    message: "Your claim for Apple AirPods Pro #LF-2026-0039 has been verified. Present your Citizen ID / QR pass at Locker Unit A Slot C1.",
    timestamp: "2 hours ago",
    read: false,
    type: "claim_update",
    recipientRole: "student",
    relatedClaimId: "CLM-2026-0087"
  },
  {
    id: "NOTIF-03",
    title: "New Claim Request Requires Verification",
    message: "Citizen Maya Lin submitted ownership verification for Item #LF-2026-0042 (Black Jansport Backpack).",
    timestamp: "35 mins ago",
    read: false,
    type: "staff_action",
    recipientRole: "staff",
    relatedClaimId: "CLM-2026-0089"
  },
  {
    id: "NOTIF-04",
    title: "Storage Unit A IoT Health Normal",
    message: "All 9 compartments secured. Temperature nominal at 21.4°C. 4 slots occupied.",
    timestamp: "1 hour ago",
    read: true,
    type: "system_alert",
    recipientRole: "staff"
  }
];
