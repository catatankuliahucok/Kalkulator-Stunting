
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, Baby, Ruler, Info, RefreshCcw, ExternalLink, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WHO_BOYS_HEIGHT, WHO_GIRLS_HEIGHT, interpolate, getStuntingStatus, type StuntingStatus } from "@/lib/who-data";
import { cn } from "@/lib/utils";

export default function StuntingCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<{
    status: StuntingStatus;
    median: number;
    m2sd: number;
    m3sd: number;
  } | null>(null);

  const calculate = () => {
    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);

    if (isNaN(ageNum) || isNaN(heightNum) || ageNum < 0 || ageNum > 60) {
      return;
    }

    const data = gender === "male" ? WHO_BOYS_HEIGHT : WHO_GIRLS_HEIGHT;
    const standards = interpolate(ageNum, data);
    const status = getStuntingStatus(heightNum, standards);

    setResult({
      status,
      median: standards.median,
      m2sd: standards.m2sd,
      m3sd: standards.m3sd,
    });
  };

  const reset = () => {
    setAge("");
    setHeight("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-bg font-sans text-text-dark flex flex-col">
      {/* Banner Header */}
      <header className="relative w-full h-[300px] lg:h-[400px] overflow-hidden flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/tJhm3HDc/Header-Ilustrasi.png" 
            alt="Banner Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-sky-400/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h1 className="text-xs lg:text-sm uppercase tracking-[0.3em] font-black text-white/80">
                Standar Pertumbuhan Anak
              </h1>
              <p className="text-4xl lg:text-6xl font-[900] text-white tracking-tighter leading-none">
                Kalkulator <br /> Stunting WHO
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center sm:justify-start gap-3"
            >
              <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Akurat
              </Badge>
              <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Standar Internasional
              </Badge>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl p-6 lg:p-8 rounded-[32px] border border-white/20 shadow-2xl text-center sm:text-right"
          >
            <span className="text-[10px] uppercase font-black text-white/60 block mb-2 tracking-widest">
              Penyedia Layanan
            </span>
            <a
              href="https://poltekmu.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-2 block"
            >
              <p className="text-lg lg:text-xl font-black text-white group-hover:text-emerald-200 transition-colors">
                Politeknik Muhammadiyah <br /> Makassar
              </p>
              <div className="flex items-center sm:justify-end gap-2 text-white/80 text-sm font-bold">
                Kunjungi Website
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </motion.div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="h-16 bg-transparent gap-8">
              <TabsTrigger 
                value="calculator" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none h-full px-0 text-sm font-bold uppercase tracking-widest text-text-muted transition-all"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Kalkulator
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-4 data-[state=active]:border-primary rounded-none h-full px-0 text-sm font-bold uppercase tracking-widest text-text-muted transition-all"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Edukasi & Pencegahan
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full p-6 lg:p-12">
        <AnimatePresence mode="wait">
          {activeTab === "calculator" ? (
            <motion.div
              key="calculator-tab"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8"
            >
              {/* Input Section */}
              <section className="space-y-6">
                <Card className="border border-border rounded-xl p-8 shadow-sm bg-white space-y-6">
                  <div className="space-y-3">
                    <Label className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Jenis Kelamin Anak
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setGender("male")}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${
                          gender === "male"
                            ? "border-primary bg-primary-light text-primary"
                            : "border-border bg-white text-text-muted hover:border-slate-300"
                        }`}
                      >
                        Laki-laki
                      </button>
                      <button
                        onClick={() => setGender("female")}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${
                          gender === "female"
                            ? "border-primary bg-primary-light text-primary"
                            : "border-border bg-white text-text-muted hover:border-slate-300"
                        }`}
                      >
                        Perempuan
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="age" className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Umur (Bulan)
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="24"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="h-14 rounded-xl border-2 border-border bg-bg px-4 text-lg font-bold focus-visible:ring-primary focus-visible:border-primary"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="height" className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Tinggi Badan (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      step="0.1"
                      placeholder="87.5"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="h-14 rounded-xl border-2 border-border bg-bg px-4 text-lg font-bold focus-visible:ring-primary focus-visible:border-primary"
                    />
                  </div>

                  <Button
                    onClick={calculate}
                    disabled={!age || !height}
                    className="w-full h-16 bg-primary hover:bg-emerald-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-95"
                  >
                    Hitung Status Gizi
                  </Button>

                  {result && (
                    <Button
                      variant="ghost"
                      onClick={reset}
                      className="w-full text-text-muted hover:text-primary font-bold"
                    >
                      Reset Data
                    </Button>
                  )}
                </Card>

                <div className="p-4 bg-white border border-border rounded-xl space-y-2">
                  <h4 className="text-[10px] font-bold uppercase text-text-muted">Tentang Poltekmu</h4>
                  <p className="text-xs font-semibold text-text-dark leading-relaxed">
                    Mencetak tenaga kesehatan unggul melalui pendidikan vokasi yang islami.
                  </p>
                </div>
              </section>

              {/* Result Section */}
              <section className="flex flex-col gap-8">
                <AnimatePresence mode="wait">
                  {result ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col gap-8"
                    >
                      <div className="bg-primary-light rounded-2xl p-10 lg:p-16 relative overflow-hidden border border-emerald-100">
                        <div className="relative z-10 space-y-4">
                          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            Status Gizi (TB/U)
                          </span>
                          <h2 className="text-6xl lg:text-8xl font-[900] tracking-tighter text-text-dark leading-none uppercase">
                            {result.status.split(" ")[0]}
                          </h2>
                          <p className="text-lg lg:text-xl font-bold text-primary/80">
                            Z-Score: {((parseFloat(height) - result.median) / (result.median - result.m2sd)).toFixed(2)} SD (Standar WHO)
                          </p>
                        </div>
                        <div className="absolute -right-8 -bottom-8 text-[180px] lg:text-[240px] font-black text-primary/5 select-none pointer-events-none">
                          WHO
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className={`p-6 rounded-xl border bg-white flex flex-col justify-between h-32 transition-all ${result.status === "Sangat Pendek (Severely Stunted)" ? "border-primary border-4 shadow-lg scale-105" : "border-border"}`}>
                          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">&lt; -3 SD</span>
                          <span className="text-sm font-bold">Sangat Pendek</span>
                        </div>
                        <div className={`p-6 rounded-xl border bg-white flex flex-col justify-between h-32 transition-all ${result.status === "Pendek (Stunted)" ? "border-primary border-4 shadow-lg scale-105" : "border-border"}`}>
                          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">-3 s/d -2 SD</span>
                          <span className="text-sm font-bold">Pendek</span>
                        </div>
                        <div className={`p-6 rounded-xl border bg-white flex flex-col justify-between h-32 transition-all ${result.status === "Normal" ? "border-primary border-4 shadow-lg scale-105" : "border-border"}`}>
                          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">&gt; -2 SD</span>
                          <span className="text-sm font-bold">Normal</span>
                        </div>
                      </div>

                      <div className="bg-white border border-border rounded-xl p-8">
                        <h4 className="text-[11px] font-bold uppercase text-text-muted mb-4 tracking-widest">Rekomendasi Gizi</h4>
                        <p className="text-base font-semibold text-text-dark leading-relaxed">
                          {result.status === "Normal" 
                            ? "Pertahankan asupan protein hewani dan stimulasi psikososial yang memadai untuk menjaga pertumbuhan optimal."
                            : "Segera konsultasikan dengan tenaga kesehatan untuk evaluasi asupan nutrisi dan kemungkinan intervensi gizi spesifik."}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-2xl bg-white/50"
                    >
                      <div className="p-6 bg-white rounded-full shadow-sm mb-6">
                        <Calculator className="w-12 h-12 text-primary/20" />
                      </div>
                      <h3 className="text-xl font-bold text-text-dark mb-2">Siap Melakukan Perhitungan</h3>
                      <p className="text-text-muted max-w-sm">
                        Masukkan data anak di sebelah kiri untuk melihat status gizi berdasarkan standar pertumbuhan WHO terbaru.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="education-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Thumbnail Navigation */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-xl font-black tracking-tight text-text-dark uppercase">
                      Daftar Infografis
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { 
                        id: "info-0", 
                        title: "Program Bapak Asuh Stunting", 
                        src: "https://i.postimg.cc/XYvyFkv4/4.png" 
                      },
                      { 
                        id: "info-1", 
                        title: "Intervensi Pencegahan", 
                        src: "https://i.postimg.cc/6Qwqc6MM/2.png" 
                      },
                      { 
                        id: "info-2", 
                        title: "Kawal 1000 Hari", 
                        src: "https://i.postimg.cc/tgyJkRBz/3.png" 
                      },
                      { 
                        id: "info-3", 
                        title: "Pencegahan Stunting Dasar", 
                        src: "https://i.postimg.cc/RZwqwJLd/1.png" 
                      }
                    ].map((item) => (
                      <motion.button
                        key={item.id}
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all bg-white shadow-md"
                      >
                        <img 
                          src={item.src} 
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 via-text-dark/20 to-transparent flex items-end p-4">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-white font-bold text-xs text-left leading-tight uppercase tracking-wider">
                              {item.title}
                            </span>
                            <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex justify-center pt-8">
                    <a 
                      href="https://drive.google.com/drive/folders/1yjclV6S4htWUR80mEW54DkP8cXezJk7R?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-6 rounded-2xl text-lg group transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2"
                      )}
                    >
                      Lihat semua Materi Edukasi
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </section>

                <section id="info-0" className="space-y-6 scroll-mt-24">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl font-black tracking-tight text-text-dark uppercase">
                      Program Bapak Asuh Stunting
                    </h2>
                  </div>
                  <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
                    <img 
                      src="https://i.postimg.cc/XYvyFkv4/4.png" 
                      alt="Infografis Bapak Asuh Stunting" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </Card>
                </section>

                <section id="info-1" className="space-y-6 scroll-mt-24">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl font-black tracking-tight text-text-dark uppercase">
                      Intervensi Pencegahan Stunting
                    </h2>
                  </div>
                  <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
                    <img 
                      src="https://i.postimg.cc/6Qwqc6MM/2.png" 
                      alt="Infografis Intervensi Pencegahan" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </Card>
                </section>

                <section id="info-2" className="space-y-6 scroll-mt-24">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl font-black tracking-tight text-text-dark uppercase">
                      Kawal 1000 Hari Pertama
                    </h2>
                  </div>
                  <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
                    <img 
                      src="https://i.postimg.cc/tgyJkRBz/3.png" 
                      alt="Infografis Kawal 1000 Hari" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </Card>
                </section>

                <section id="info-3" className="space-y-6 scroll-mt-24">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-2 bg-primary rounded-full" />
                    <h2 className="text-3xl font-black tracking-tight text-text-dark uppercase">
                      Pencegahan Stunting Dasar
                    </h2>
                  </div>
                  <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
                    <img 
                      src="https://i.postimg.cc/RZwqwJLd/1.png" 
                      alt="Infografis Pencegahan Stunting Dasar" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </Card>
                </section>

                <div className="bg-primary text-white p-12 rounded-[40px] shadow-2xl shadow-emerald-200 relative overflow-hidden">
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-4xl font-black leading-tight">
                      Mari Bersama Wujudkan <br /> Generasi Bebas Stunting!
                    </h3>
                    <p className="text-emerald-50 text-lg max-w-xl font-medium">
                      Pencegahan stunting dimulai dari masa kehamilan hingga anak berusia 2 tahun. Pastikan asupan gizi seimbang dan pantau pertumbuhan rutin di Posyandu.
                    </p>
                    <Button 
                      onClick={() => setActiveTab("calculator")}
                      className="bg-white text-primary hover:bg-emerald-50 font-bold px-8 py-6 rounded-2xl text-lg group"
                    >
                      Mulai Hitung Sekarang
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="absolute -right-20 -bottom-20 text-[300px] font-black text-white/10 select-none pointer-events-none">
                    1000
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-8 text-center border-t border-border bg-white space-y-2">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
          Disclaimer: Hasil kalkulator ini hanya sebagai referensi awal. Silakan konsultasikan dengan tenaga medis untuk diagnosis akurat.
        </p>
        <p className="text-[8px] font-medium text-text-muted/60 uppercase tracking-wider">
          Credit: @2026 - Ucok, Hasnah, Tim PKM Politeknik Muhammadiah Makassar
        </p>
      </footer>
    </div>
  );
}
