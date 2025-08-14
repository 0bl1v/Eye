"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter as UIDialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import {
  Plus,
  Search,
  Download,
  ChevronDown,
  Settings,
  Menu,
  Bell,
  CheckCircle2,
  Star,
} from "lucide-react";

// Optional: lightweight table row type
type Project = {
  id: string;
  name: string;
  owner: string;
  status: "Active" | "Paused" | "Done";
  progress: number;
};

const SAMPLE_PROJECTS: Project[] = [
  { id: "P-001", name: "Aurora", owner: "Mert", status: "Active", progress: 64 },
  { id: "P-002", name: "Nimbus", owner: "Ece", status: "Paused", progress: 32 },
  { id: "P-003", name: "Quasar", owner: "Arda", status: "Done", progress: 100 },
  { id: "P-004", name: "Zenith", owner: "Sena", status: "Active", progress: 78 },
];

export default function Page() {
  const { toast } = useToast();
  const [query, setQuery] = React.useState("");
  const [notifications, setNotifications] = React.useState(true);

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase();
    return SAMPLE_PROJECTS.filter((p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
  }, [query]);

  return (
    <TooltipProvider>
      <main className="min-h-[100svh] bg-background text-foreground">
        {/* Top bar */}
        <div className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Quick Menu</SheetTitle>
                  <SheetDescription>Navigate through sections</SheetDescription>
                </SheetHeader>
                <nav className="mt-6 grid gap-2">
                  {[
                    "Overview",
                    "Projects",
                    "Tasks",
                    "Team",
                    "Settings",
                  ].map((i) => (
                    <Button key={i} variant="ghost" className="justify-start">
                      {i}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span className="font-semibold tracking-tight">Shadcn Starter</span>
              <Badge variant="secondary" className="ml-1">v1</Badge>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="pl-8 w-64"
                />
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setNotifications((v) => !v)}>
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Toggle notifications</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications {notifications ? "on" : "off"}</TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    Quick Actions
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => toast({ title: "Export started", description: "We are preparing your file." })}>
                    <Download className="mr-2 h-4 w-4" /> Export CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast({ title: "New project", description: "Blank project created." })}>
                    <Plus className="mr-2 h-4 w-4" /> New Project
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" /> Preferences
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Avatar className="ml-1">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=imertsafi" alt="User" />
                <AvatarFallback>İMS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Hero / header section */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome back 👋</h1>
              <p className="text-muted-foreground">Ship faster with a clean shadcn/ui starter page.</p>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-1">
                    <Plus className="h-4 w-4" /> New project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create project</DialogTitle>
                    <DialogDescription>Spin up a fresh workspace in seconds.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-2">
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Project name" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea placeholder="What are you building?" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border p-3">
                      <div>
                        <div className="text-sm font-medium">Enable notifications</div>
                        <div className="text-xs text-muted-foreground">Get activity alerts</div>
                      </div>
                      <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </div>
                  </div>
                  <UIDialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={() => toast({ title: "Project created", description: "Aurora is live." })}>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Create
                    </Button>
                  </UIDialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="gap-1" onClick={() => toast({ title: "Export queued", description: "You'll get a notification." })}>
                <Download className="h-4 w-4" /> Export
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Content grid */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Left column */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Track progress and status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="paused">Paused</TabsTrigger>
                    <TabsTrigger value="done">Done</TabsTrigger>
                  </TabsList>
                  {(["all", "active", "paused", "done"] as const).map((tab) => (
                    <TabsContent key={tab} value={tab} className="space-y-3">
                      <div className="rounded-xl border">
                        <div className="grid grid-cols-12 items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                          <div className="col-span-2">ID</div>
                          <div className="col-span-4">Name</div>
                          <div className="col-span-3">Owner</div>
                          <div className="col-span-3">Status</div>
                        </div>
                        <Separator />
                        <div className="divide-y">
                          {filtered
                            .filter((p) =>
                              tab === "all" ? true : tab === "active" ? p.status === "Active" : tab === "paused" ? p.status === "Paused" : p.status === "Done"
                            )
                            .map((p) => (
                              <div key={p.id} className="grid grid-cols-12 items-center gap-2 px-4 py-3">
                                <div className="col-span-2 font-mono text-xs">{p.id}</div>
                                <div className="col-span-4 font-medium">{p.name}</div>
                                <div className="col-span-3 flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={`https://api.dicebear.com/7.x/identicon/svg?seed=${p.owner}`} />
                                    <AvatarFallback>{p.owner.slice(0,2).toUpperCase()}</AvatarFallback>
                                  </Avatar>
                                  <span>{p.owner}</span>
                                </div>
                                <div className="col-span-3 flex items-center gap-3">
                                  <Badge variant={p.status === "Active" ? "default" : p.status === "Paused" ? "secondary" : "outline"}>{p.status}</Badge>
                                  <div className="w-40">
                                    <Progress value={p.progress} />
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">{filtered.length} results</div>
                <Button variant="ghost" size="sm" className="gap-1">
                  View all
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Right column */}
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quick start</CardTitle>
                  <CardDescription>Common actions</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button className="justify-start" variant="secondary">
                    <Plus className="mr-2 h-4 w-4" /> Create a project
                  </Button>
                  <Button className="justify-start" variant="ghost">
                    <Download className="mr-2 h-4 w-4" /> Import data
                  </Button>
                  <Button className="justify-start" variant="ghost">
                    <Settings className="mr-2 h-4 w-4" /> Open settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team spotlight</CardTitle>
                  <CardDescription>Say hi to today's hero</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=Safi" />
                    <AvatarFallback>IM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">İlke Mert Safi</div>
                    <div className="text-sm text-muted-foreground">Frontend • Istanbul</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Fine‑tune your UI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl border p-3">
                    <div>
                      <div className="text-sm font-medium">Compact mode</div>
                      <div className="text-xs text-muted-foreground">Denser tables & paddings</div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between rounded-xl border p-3">
                    <div>
                      <div className="text-sm font-medium">Dark mode</div>
                      <div className="text-xs text-muted-foreground">Follows system by default</div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Shadcn Starter</span>
            <a className="underline-offset-4 hover:underline" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">Docs</a>
          </div>
        </footer>
      </main>
    </TooltipProvider>
  );
}
