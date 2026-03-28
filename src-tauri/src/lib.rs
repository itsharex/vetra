use tauri::Manager;
use window_vibrancy::apply_mica;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app
                .get_webview_window("main")
                .expect("main window not found");
            let _ = apply_mica(&window, None);

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
