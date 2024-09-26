
        
        define(["require", "exports"], function (require, exports) {
        
          const managementServerJson = {"version": "1.0", "available": true, "sectionId": "managementServer", "sectionTitle": "Database Server", "sectionMessage": "Database server information collected at : ", "sectionTimeContext": "2024-08-29 17:29:54.000000", "context": {"count": 0, "status": "success", "tag": "0 Uncleared Alerts", "mgmtserverReport": [{"node": "scaqal03adm05vm01", "plot": {"available": true, "report": "../plots/managementServerMetrics_scaqal03adm05vm01.js", "height": 1600}}, {"node": "scaqal03adm06vm01", "plot": {"available": true, "report": "../plots/managementServerMetrics_scaqal03adm06vm01.js", "height": 1600}}], "mgmtserveralertsReport": {"records": {"allAlerts": {"plot": {"available": false, "report": "", "height": -1}, "dataAvailability": {"available": false, "message": "No Alert Information Available", "status": "info"}}, "openAlerts": {"plot": {"available": false, "report": "", "height": -1}, "records": [], "dataAvailability": {"available": false, "message": "No Open Alert Information Available", "status": "info"}}}, "dataAvailability": {"available": true, "message": "Data available", "status": "info"}}}};
          
          exports.default = managementServerJson;
          
        });

        