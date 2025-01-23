import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const references = [
  { company: "MULTI-COLOR CORPORATION", location: "CLUJ-NAPOCA" },
  { company: "TIPOGRAFIA ARTA", location: "CLUJ-NAPOCA" },
  { company: "SEEN PRINT", location: "CLUJ-NAPOCA" },
  { company: "POLIAM IMPORT EXPORT", location: "CLUJ-NAPOCA" },
  { company: "STUDIO IMPRESS DESIGN", location: "CLUJ-NAPOCA" },
  { company: "PGM LEVAND", location: "CLUJ-NAPOCA" },
  { company: "IKORSOFT PRINTING", location: "CLUJ-NAPOCA" },
  { company: "PERGAMON RD", location: "CLUJ-NAPOCA" },
  { company: "PRINTMAN", location: "BUCUREȘTI" },
  { company: "FLYERPRINT", location: "IAȘI" },
  { company: "ASKA GRAFIKA", location: "SIGHETU MARMATIEI" },
  { company: "DISZ TIPO", location: "SĂCELE/BRAȘOV" },
];

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
  );
}
