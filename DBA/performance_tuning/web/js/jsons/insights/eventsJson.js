
        
        define(["require", "exports"], function (require, exports) { 
        
          const eventsJson = {"version": "1.0", "available": true, "sectionId": "events", "sectionTitle": "Timeline", "sectionMessage": "Event information for time range : ", "sectionTimeContext": "2024-08-29 16:29:54   -   2024-08-29 17:29:54", "context": {"count": 0, "status": "success", "tag": "Log Events", "snapshotTimestamp": "", "timelines": [{"label": "Host Faceted View", "plot": {"available": false, "report": "", "height": -1, "id": "plot_host_faceted"}}, {"label": "Event Faceted View", "plot": {"available": false, "report": "", "height": -1, "id": "plot_event_faceted"}}, {"label": "Database Faceted View", "plot": {"available": false, "report": "", "height": -1, "id": "plot_database_faceted"}}, {"label": "Component Faceted View", "plot": {"available": false, "report": "", "height": -1, "id": "plot_component_faceted"}}], "table": {"columns": [{"headerText": "Timestamp", "field": "attr.eventTime"}, {"headerText": "Type", "field": "attr.eventType", "className": "table-world-wrap"}, {"headerText": "Event", "field": "attr.eventName", "className": "table-world-wrap"}, {"headerText": "Hostname", "field": "attr.hostname", "className": "table-world-wrap"}, {"headerText": "Description", "field": "attr.eventString", "className": "table-world-wrap"}], "records": [], "filters": [{"inputLabel": "Event Component", "fieldToFilter": "eventComponent", "options": []}, {"inputLabel": "Event Name", "fieldToFilter": "eventName", "options": []}, {"inputLabel": "Event Type", "fieldToFilter": "eventType", "options": []}, {"inputLabel": "Hostname", "fieldToFilter": "hostname", "options": []}]}, "dataAvailability": {"available": false, "message": "No Timeline Information Available", "status": "info"}}};
          
          exports.default = eventsJson;
          
        });

        