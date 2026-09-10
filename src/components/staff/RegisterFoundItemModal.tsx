import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { 
  X, 
  Package, 
  HardDrive, 
  MapPin, 
  Tag, 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  QrCode 
} from "lucide-react";

export const RegisterFoundItemModal: React.FC = () => {
  const { 
    isRegisterModalOpen, 
    setIsRegisterModalOpen, 
    registerFoundItem, 
    storageBoxes 
  } = useApp();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Bags & Backpacks");
  const [itemType, setItemType] = useState("Backpack");
  const [color, setColor] = useState("Black");
  const [brand, setBrand] = useState("");
  const [identifyingCharacteristics, setIdentifyingCharacteristics] = useState("");
  const [foundLocation, setFoundLocation] = useState("City Public Library - 1st Floor");
  const [surrenderedBy, setSurrenderedBy] = useState("LGU Desk Officer: Marcus Vance");
  const [storageBoxId, setStorageBoxId] = useState("BOX-A");
  const [storageSlotId, setStorageSlotId] = useState("A1");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80");

  if (!isRegisterModalOpen) return null;

  const currentBox = storageBoxes.find(b => b.id === storageBoxId) || storageBoxes[0];
  const availableSlots = currentBox.slots.filter(s => s.status === "available");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    registerFoundItem({
      title,
      category,
      itemType: itemType || category,
      description: `${color} ${brand} ${itemType}. ${identifyingCharacteristics}`,
      color,
      brand: brand || "Unbranded",
      identifyingCharacteristics: identifyingCharacteristics || "Standard item with normal wear",
      foundLocation,
      foundDate: new Date().toISOString().slice(0, 10),
      surrenderedBy,
      storageBoxId,
      storageSlotId: storageSlotId || (availableSlots[0]?.id || "A1"),
      imageUrl
    });

    setIsRegisterModalOpen(false);
  };

  const sampleImages = [
    { label: "Backpack", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80" },
    { label: "Bottle", url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80" },
    { label: "Earbuds", url: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80" },
    { label: "Calculator", url: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=800&q=80" },
    { label: "Jacket", url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80" },
    { label: "Keys", url: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900">Register New Found Item</h2>
              <p className="text-xs text-stone-500">Intake cataloging, IoT locker assignment, and label printing</p>
            </div>
          </div>

          <button
            onClick={() => setIsRegisterModalOpen(false)}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-stone-800">Item Title / Headline *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Midnight Blue Fjallraven Kanken Backpack"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setItemType(e.target.value);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              >
                <option value="Bags & Backpacks">Bags & Backpacks</option>
                <option value="Bottles & Containers">Bottles & Containers</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel & Accessories">Apparel & Accessories</option>
                <option value="Keys & Badges">Keys & Badges</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800">Brand / Maker</label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g., Apple, Nike, Hydro Flask..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800">Primary Color</label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="e.g., Matte Black, Navy Blue..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800">Turned in by (LGU Officer / Facility Staff)</label>
              <input
                type="text"
                value={surrenderedBy}
                onChange={(e) => setSurrenderedBy(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-stone-800">Found Location in City / Facility</label>
              <input
                type="text"
                value={foundLocation}
                onChange={(e) => setFoundLocation(e.target.value)}
                placeholder="e.g., City Hall South Wing, Public Library, Transport Terminal"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-stone-800">Unique Identifying Characteristics</label>
              <textarea
                rows={2}
                value={identifyingCharacteristics}
                onChange={(e) => setIdentifyingCharacteristics(e.target.value)}
                placeholder="e.g., Blue carabiner keychain, sticker on base, engraved initials 'J.D.'..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* Storage Locker Compartment Assignment */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center space-x-2 text-stone-900 font-bold">
              <HardDrive className="w-4 h-4 text-emerald-800" />
              <span>IoT Smart Locker Assignment</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-stone-500 font-semibold block mb-1">Target Locker Unit:</label>
                <select
                  value={storageBoxId}
                  onChange={(e) => {
                    setStorageBoxId(e.target.value);
                    const b = storageBoxes.find(box => box.id === e.target.value);
                    const openSlot = b?.slots.find(s => s.status === "available");
                    setStorageSlotId(openSlot?.id || "A1");
                  }}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white"
                >
                  <option value="BOX-A">LGU Locker Unit A (City Hall Lobby)</option>
                  <option value="BOX-B">LGU Locker Unit B (Community Center)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-stone-500 font-semibold block mb-1">Assigned Available Compartment:</label>
                <select
                  value={storageSlotId}
                  onChange={(e) => setStorageSlotId(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white"
                >
                  {availableSlots.length === 0 ? (
                    <option value="">No available slots (Locker Full)</option>
                  ) : (
                    availableSlots.map(s => (
                      <option key={s.id} value={s.id}>
                        Slot {s.id} (Row {s.row}, Col {s.col}) - Ready
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Quick Photo Presets */}
          <div className="space-y-1.5">
            <label className="font-bold text-stone-800">Quick Photo Asset Selector</label>
            <div className="flex flex-wrap gap-2">
              {sampleImages.map(img => (
                <button
                  type="button"
                  key={img.label}
                  onClick={() => setImageUrl(img.url)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                    imageUrl === img.url
                      ? "bg-emerald-800 text-white border-emerald-800"
                      : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end space-x-3 pt-3 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setIsRegisterModalOpen(false)}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-xs transition-colors"
            >
              Save Item & Print QR Label
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
