import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { ClaimRequest } from "../../types";
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  User, 
  Search, 
  HardDrive, 
  ChevronRight, 
  Sparkles,
  Lock,
  QrCode
} from "lucide-react";

export const StaffClaimRequests: React.FC = () => {
  const { 
    claims, 
    foundItems, 
    setSelectedClaim, 
    setIsVerifyModalOpen,
    setIsScannerModalOpen, 
    setStaffView 
  } = useApp();

  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClaims = claims.filter(c => {
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    const matchesSearch = (
      c.claimantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.claimantId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.itemId.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesStatus && matchesSearch;
  });

  const handleOpenVerify = (claim: ClaimRequest) => {
    setSelectedClaim(claim);
    setIsVerifyModalOpen(true);
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-stone-500 mb-1">
            <button onClick={() => setStaffView("dashboard")} className="hover:text-emerald-800">LGU Dashboard</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Claim Verification Queue</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Claim Verification Queue
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Review citizen ownership proofs, inspect stored items, and authorize smart locker retrieval passes.
          </p>
        </div>

        <button
          onClick={() => setIsScannerModalOpen(true)}
          className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-1.5 self-start sm:self-auto"
        >
          <QrCode className="w-4 h-4" />
          <span>Launch RFID Kiosk Station</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-stone-200/80 rounded-2xl p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search claimant, ID, item #..."
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-stone-200 bg-stone-50/50 text-stone-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-stone-200 bg-stone-50/50 text-stone-700 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
          >
            <option value="all">All Claim Statuses ({claims.length})</option>
            <option value="pending_review">Pending Review</option>
            <option value="under_verification">Under Verification</option>
            <option value="ready_for_retrieval">Ready for Retrieval</option>
            <option value="released">Released & Closed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Claim Requests List */}
      <div className="space-y-4">
        {filteredClaims.length === 0 ? (
          <div className="bg-white border border-stone-200/80 rounded-3xl p-12 text-center text-stone-400 space-y-3">
            <ShieldCheck className="w-8 h-8 mx-auto text-stone-300" />
            <p className="text-sm font-semibold text-stone-700">No claims match the filter criteria.</p>
          </div>
        ) : (
          filteredClaims.map((claim) => {
            const item = foundItems.find(i => i.id === claim.itemId);
            const isPending = claim.status === "pending_review" || claim.status === "under_verification";

            return (
              <div
                key={claim.id}
                className="bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
                  <div className="flex items-center space-x-2.5">
                    <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded-md">
                      Claim #{claim.id}
                    </span>
                    <span className="text-xs font-bold text-stone-800">
                      {claim.claimantName} ({claim.claimantId})
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      claim.status === "ready_for_retrieval"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200 animate-pulse"
                        : claim.status === "released"
                        ? "bg-stone-100 text-stone-700"
                        : claim.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-amber-100 text-amber-800 border border-amber-200"
                    }`}>
                      {claim.status.replace(/_/g, " ")}
                    </span>
                  </div>

                  <span className="text-xs text-stone-400 font-mono">
                    Submitted: {new Date(claim.submittedDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* Left Column: Target Item Info */}
                  <div className="md:col-span-4 flex items-start space-x-3 bg-stone-50/80 p-3.5 rounded-xl border border-stone-200/70">
                    {item && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover border border-stone-200 shrink-0"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase block">
                        Target Item #{claim.itemId}
                      </span>
                      <p className="text-xs font-bold text-stone-900 truncate mt-0.5">
                        {item?.title || claim.itemId}
                      </p>
                      <p className="text-[11px] text-stone-500">
                        {item?.storageBoxId} • Slot {item?.storageSlotId}
                      </p>
                      <div className="mt-1 flex items-center space-x-1 text-[10px] text-emerald-800 font-semibold">
                        <Sparkles className="w-3 h-3" />
                        <span>AI Match Score: {claim.similarityScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Submitted Proofs */}
                  <div className="md:col-span-8 space-y-2 text-xs">
                    <div>
                      <span className="text-stone-400 text-[11px] uppercase font-bold block">Claimant Stated Proof:</span>
                      <p className="text-stone-800 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60 leading-relaxed font-medium mt-1">
                        "{claim.proofOfOwnership}"
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-stone-500">
                      <span>Contact: {claim.contactEmail} • {claim.contactPhone}</span>
                      {claim.retrievalCode && (
                        <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          Retrieval Pass: {claim.retrievalCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    {claim.reviewedBy ? (
                      <span>Reviewed by {claim.reviewedBy}</span>
                    ) : (
                      <span>Awaiting personnel decision</span>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenVerify(claim)}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 shadow-2xs active:scale-98"
                  >
                    <span>{isPending ? "Inspect & Verify Claim" : "View Decision Details"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
