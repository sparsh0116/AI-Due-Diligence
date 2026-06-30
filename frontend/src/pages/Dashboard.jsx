import { Upload, Sparkles } from "lucide-react";

function Dashboard() {
  return (
    <div className="h-full flex flex-col">

      {/* Page Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Startup Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Analyze startups using AI-powered due diligence.
        </p>

      </div>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center">

        <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center">

          <div className="w-20 h-20 rounded-full bg-indigo-600/20 flex items-center justify-center mx-auto mb-8">

            <Sparkles
              size={36}
              className="text-indigo-400"
            />

          </div>

          <h2 className="text-3xl font-bold text-white">

            No Startup Selected

          </h2>

          <p className="mt-4 text-slate-400 max-w-lg mx-auto leading-7">

            Upload a startup's pitch deck, financial statements,
            legal documents, and other files to generate an
            AI-powered due diligence report.

          </p>

          <button className="mt-10 bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto">

            <Upload size={20} />

            Upload Documents

          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;