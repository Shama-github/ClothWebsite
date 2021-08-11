using Microsoft.EntityFrameworkCore.Migrations;

namespace clothwebapi.Migrations
{
    public partial class cloth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cloths",
                columns: table => new
                {
                    CID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CImage = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CPrice = table.Column<int>(type: "int", nullable: false),
                    CCategory = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CBrand = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CSize = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CDelieveryType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cloths", x => x.CID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cloths");
        }
    }
}
