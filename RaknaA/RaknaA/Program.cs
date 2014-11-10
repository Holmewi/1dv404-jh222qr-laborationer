using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RaknaA
{
    class Program
    {
        static void Main(string[] args)
        {
            // Variabler
            string line;
            char uppecase = 'A';
            char lowercase = 'a';
            int count = 0;

            // Skiva en sträng
            Console.WriteLine("Mata in en textrad:");
            line = Console.ReadLine();

            // Räkna a och A från strängen
            // Skriv ut resultats
            if (line.Contains(lowercase) || line.Contains(uppecase))
            {
                if (line.Contains(lowercase))
                {
                    count = line.Split(lowercase).Length - 1;
                    Console.WriteLine("Antal {0}: {1}", lowercase, count);
                    count = 0;
                }
                else if (!line.Contains(lowercase))
                {
                    Console.WriteLine("Inga {0}!", lowercase);
                }
                if (line.Contains(uppecase))
                {
                    count = line.Split(uppecase).Length - 1;
                    Console.WriteLine("Antal {0}: {1}", uppecase, count);
                    count = 0;
                }
                else if (!line.Contains(uppecase))
                {
                    Console.WriteLine("Inga {0}!", uppecase);
                }
            }
            else
            {
                Console.WriteLine("Det finns inga bokstäver som stämmer överens");
            }

            


            

            
            

            
            
        }
    }
}
