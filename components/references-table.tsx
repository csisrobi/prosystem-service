import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const references = [
  { company: "MEGAPRESS", location: "BUCUREȘTI" },
  { company: "NOVIS", location: "CLUJ-NAPOCA" },
  { company: "ARTA GRAFICA", location: "BUCUREȘTI" },
  { company: "TRANSILVANIA PACK & PRINT", location: "SURA MICA/SIBIU" },
  { company: "ART GROUP", location: "BUCUREȘTI" },
  { company: "DELROTI & MULLER", location: "CLUJ-NAPOCA" },
  { company: "DISZ TIPO", location: "SĂCELE/BRAȘOV" },
  { company: "DITOVIS", location: "CLUJ-NAPOCA" },
  { company: "ROMSVER", location: "CLUJ-NAPOCA" },
  { company: "GOERNER PACKAGING", location: "LUGOJ" },
  { company: "MARELE ALB", location: "TURDA" },
  { company: "ALBAPRINT", location: "PETREȘTI" },
  { company: "LG PRODUCT", location: "BELGRAD/SERBIA" },
  { company: "CORESI", location: "BUCUREȘTI" },
]

export function ReferencesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Companie</TableHead>
          <TableHead>Locație</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {references.map((ref) => (
          <TableRow key={ref.company}>
            <TableCell className="font-medium">{ref.company}</TableCell>
            <TableCell>{ref.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

