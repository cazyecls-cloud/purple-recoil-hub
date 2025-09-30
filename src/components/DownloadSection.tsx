import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Play } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-surface-dark to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 glow-purple">
            <Download className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-glow">
            How to Download
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your preferred download method and follow the steps below
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Method 1 - Limit Client */}
          <Card className="bg-card border-primary/30 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Download className="w-6 h-6" />
                Method 1: Limit Client
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Recommended - Quick & Easy</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                    1
                  </span>
                  <span>Go to the Google Drive and download the ZIP file</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                    2
                  </span>
                  <span>Extract the ZIP anywhere you want</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                    3
                  </span>
                  <span>Open "RustClient.exe" (make sure you have Steam open)</span>
                </li>
              </ol>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="hero"
                  onClick={() => window.open("https://drive.google.com/drive/folders/1LNYjXsysg-pvfQCJkukDOs40sHeNflnl", "_blank")}
                  className="w-full"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download from Google Drive
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://youtu.be/8wiYo5KGpZU", "_blank")}
                  className="w-full"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Tutorial
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Method 2 - Steam Depots */}
          <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Download className="w-6 h-6" />
                Method 2: Steam Depots
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">100% Safe - Advanced Method</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ol className="space-y-3 text-foreground text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    1
                  </span>
                  <span>Open Windows Run Command (Win+R)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    2
                  </span>
                  <span>Open Steam console (steam://nav/console in run command)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    3
                  </span>
                  <div className="flex-1">
                    <p className="mb-2">Download Rust through Steam depots:</p>
                    <div className="bg-surface-dark p-3 rounded font-mono text-xs space-y-1">
                      <p>download_depot 252490 252494 9009740734112295990</p>
                      <p>download_depot 252490 252495 3415748059135845927</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    4
                  </span>
                  <span>Drag the contents of separate files together</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    5
                  </span>
                  <span>Open <a href="https://hexed.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://hexed.it/</a> in your browser</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    6
                  </span>
                  <span>Open the GameAssembly.dll file from your Rust folder</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    7
                  </span>
                  <span>Enable "32-bit integer", "Hexadecimal Values" and "Little-Endian"</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    8
                  </span>
                  <span>Search for "252490" and click find next</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    9
                  </span>
                  <span>Click on "16 bit integer" and change it to "480"</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    10
                  </span>
                  <span>Export the file to downloads</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    11
                  </span>
                  <span>Replace GameAssembly.dll in your Rust folder</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
                    12
                  </span>
                  <span>Open RustClient.exe (NOT RUST.EXE)</span>
                </li>
              </ol>

              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => window.open("https://youtu.be/7AyJXevtPxc", "_blank")}
                  className="w-full"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Tutorial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
