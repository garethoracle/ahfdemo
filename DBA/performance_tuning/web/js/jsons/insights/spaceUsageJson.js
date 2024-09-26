
        
        define(["require", "exports"], function (require, exports) { 
        
          const spaceJson = {"version": "1.0", "available": true, "sectionId": "spaceUsage", "sectionTitle": "Space Analysis", "sectionMessage": "Space Analysis collected at : ", "sectionTimeContext": "2024-08-29 16:41:05.083", "context": {"count": 0, "status": "success", "tag": "No Space Issues", "nodes": [{"value": "scaqal03adm05vm01", "label": "scaqal03adm05vm01"}, {"value": "scaqal03adm06vm01", "label": "scaqal03adm06vm01"}], "diskUtilization": {"plot": {"available": true, "report": "../plots/diskUsage.js", "height": 400}, "diskUtilizationTable": {"columns": [{"headerText": "Node", "field": "node", "className": "table-world-wrap"}, {"headerText": "Mount", "field": "diagnosticLocation", "className": "table-world-wrap"}, {"headerText": "Tags", "field": "tags", "className": "table-world-wrap"}, {"headerText": "Used", "field": "used", "className": "table-world-wrap"}, {"headerText": "Available", "field": "available", "className": "table-world-wrap"}, {"headerText": "Total", "field": "total", "className": "table-world-wrap"}, {"headerText": "Usage(%)", "field": "usedPercentage", "className": "table-world-wrap"}], "records": [{"node": "scaqal03adm05vm01", "diagnosticLocation": "/", "tags": "Root", "usedPercentage": 60.67, "used": "9.1 GB", "available": "5.89 GB", "total": "14.99 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/boot", "tags": "Boot", "usedPercentage": 16.66, "used": "84.76 MB", "available": "423.91 MB", "total": "508.67 MB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/crashfiles", "tags": "Unavailable", "usedPercentage": 0.16, "used": "32.2 MB", "available": "19.87 GB", "total": "19.9 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/var", "tags": "Unavailable", "usedPercentage": 37.09, "used": "755.93 MB", "available": "1.25 GB", "total": "1.99 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/tmp", "tags": "Unavailable", "usedPercentage": 11.06, "used": "338.66 MB", "available": "2.66 GB", "total": "2.99 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/u01", "tags": "Database Homes", "usedPercentage": 40.63, "used": "8.09 GB", "available": "11.82 GB", "total": "19.9 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/u01/app/oracle/product/21.0.0.0/dbhome_1", "tags": "Database Homes", "usedPercentage": 20.29, "used": "10.13 GB", "available": "39.78 GB", "total": "49.9 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/u01/app/21.0.0.0/grid", "tags": "Grid Home", "usedPercentage": 18.18, "used": "9.07 GB", "available": "40.83 GB", "total": "49.9 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/var/log", "tags": "Unavailable", "usedPercentage": 28.85, "used": "5.19 GB", "available": "12.8 GB", "total": "17.99 GB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/var/log/audit", "tags": "Unavailable", "usedPercentage": 13.82, "used": "140.16 MB", "available": "873.84 MB", "total": "1014.0 MB"}, {"node": "scaqal03adm05vm01", "diagnosticLocation": "/home", "tags": "Unavailable", "usedPercentage": 1.63, "used": "66.78 MB", "available": "3.93 GB", "total": "4.0 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/", "tags": "Root", "usedPercentage": 49.5, "used": "7.42 GB", "available": "7.57 GB", "total": "14.99 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/boot", "tags": "Boot", "usedPercentage": 16.66, "used": "84.76 MB", "available": "423.91 MB", "total": "508.67 MB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/crashfiles", "tags": "Unavailable", "usedPercentage": 0.16, "used": "32.2 MB", "available": "19.87 GB", "total": "19.9 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/u01", "tags": "Database Homes", "usedPercentage": 51.67, "used": "10.28 GB", "available": "9.62 GB", "total": "19.9 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/u01/app/oracle/product/21.0.0.0/dbhome_1", "tags": "Database Homes", "usedPercentage": 20.01, "used": "9.99 GB", "available": "39.92 GB", "total": "49.9 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/u01/app/21.0.0.0/grid", "tags": "Grid Home", "usedPercentage": 17.94, "used": "8.95 GB", "available": "40.95 GB", "total": "49.9 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/home", "tags": "Unavailable", "usedPercentage": 1.08, "used": "44.38 MB", "available": "3.95 GB", "total": "4.0 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/var", "tags": "Unavailable", "usedPercentage": 24.79, "used": "505.25 MB", "available": "1.5 GB", "total": "1.99 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/var/log", "tags": "Unavailable", "usedPercentage": 23.96, "used": "4.31 GB", "available": "13.68 GB", "total": "17.99 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/tmp", "tags": "Unavailable", "usedPercentage": 1.06, "used": "32.5 MB", "available": "2.96 GB", "total": "2.99 GB"}, {"node": "scaqal03adm06vm01", "diagnosticLocation": "/var/log/audit", "tags": "Unavailable", "usedPercentage": 15.47, "used": "156.84 MB", "available": "857.16 MB", "total": "1014.0 MB"}]}}, "diagnosticsSpaceUsage": {"scaqal03adm05vm01": {"/u01/app/oracle/diag": {"plot": {"available": true, "report": "../plots/diskDiagSankeyPlot_aa95287c-d2ef-4697-b506-a724a199bd63.js", "height": 500}, "table": {"columns": [{"headerText": "Path", "field": "path"}, {"headerText": "Size", "field": "size"}], "records": [{"path": "/u01/app/oracle/diag", "size": "2.68 GB", "children": [{"path": "/u01/app/oracle/diag/asm", "size": "7.38 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm", "size": "7.38 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm/+ASM1", "size": "7.38 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/hm", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/trace", "size": "7.37 MB"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM1/alert", "size": "12.0 KB"}]}]}]}, {"path": "/u01/app/oracle/diag/crs", "size": "239.37 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01", "size": "239.37 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs", "size": "239.37 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs/trace", "size": "239.37 MB"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs/alert", "size": "4.0 KB"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm05vm01/crs/cdump", "size": "0.0 bytes"}]}]}]}, {"path": "/u01/app/oracle/diag/tnslsnr", "size": "2.44 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01", "size": "2.44 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm", "size": "18.45 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm/alert", "size": "18.14 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm/trace", "size": "316.0 KB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/asmnet1lsnr_asm/cdump", "size": "0.0 bytes"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1", "size": "237.0 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1/alert", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan1/trace", "size": "237.0 MB"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener", "size": "1.45 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener/trace", "size": "1.16 GB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener/alert", "size": "302.79 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener/incident", "size": "0.0 bytes"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3", "size": "92.07 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3/alert", "size": "51.32 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan3/trace", "size": "40.75 MB"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2", "size": "659.53 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2/trace", "size": "659.53 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2/alert", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm05vm01/listener_scan2/cdump", "size": "0.0 bytes"}]}]}]}], "diagType": "grid"}]}}}, "scaqal03adm06vm01": {"/u01/app/oracle/diag": {"plot": {"available": true, "report": "../plots/diskDiagSankeyPlot_0f8fe03f-eee5-4859-8208-08a92347bde2.js", "height": 500}, "table": {"columns": [{"headerText": "Path", "field": "path"}, {"headerText": "Size", "field": "size"}], "records": [{"path": "/u01/app/oracle/diag", "size": "3.2 GB", "children": [{"path": "/u01/app/oracle/diag/asm", "size": "5.49 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm", "size": "5.49 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm/+ASM2", "size": "5.49 MB", "children": [{"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/alert", "size": "8.0 KB"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/trace", "size": "5.48 MB"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/hm", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/asm/+asm/+ASM2/cdump", "size": "0.0 bytes"}]}]}]}, {"path": "/u01/app/oracle/diag/crs", "size": "189.23 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01", "size": "189.23 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs", "size": "189.23 MB", "children": [{"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs/trace", "size": "189.22 MB"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs/alert", "size": "8.0 KB"}, {"path": "/u01/app/oracle/diag/crs/scaqal03adm06vm01/crs/log", "size": "0.0 bytes"}]}]}]}, {"path": "/u01/app/oracle/diag/tnslsnr", "size": "3.01 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01", "size": "3.01 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener", "size": "1.31 GB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener/trace", "size": "1.22 GB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener/alert", "size": "87.2 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener/log", "size": "0.0 bytes"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3", "size": "645.36 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3/alert", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan3/trace", "size": "645.36 MB"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1", "size": "654.8 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1/alert", "size": "222.4 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1/trace", "size": "432.4 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan1/log", "size": "0.0 bytes"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2", "size": "159.52 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2/trace", "size": "109.25 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2/alert", "size": "50.26 MB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/listener_scan2/incident", "size": "0.0 bytes"}]}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm", "size": "279.42 MB", "children": [{"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm/cdump", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm/log", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm/incident", "size": "0.0 bytes"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm/trace", "size": "316.0 KB"}, {"path": "/u01/app/oracle/diag/tnslsnr/scaqal03adm06vm01/asmnet1lsnr_asm/alert", "size": "279.11 MB"}]}]}]}], "diagType": "grid"}]}}}}, "dataAvailability": {"available": true, "message": "Data available", "status": "info"}}, "diskUtilTimeContext": "2024-08-29 16:41:05.083", "diagnosticSpaceUsageTimeContext": "2024-08-29 16:40:56.000000"};
          
          exports.default = spaceJson;
          
        });

        