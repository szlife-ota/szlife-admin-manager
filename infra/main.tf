resource "google_service_account" "admin_runner" {
  account_id   = "admin-manager-runner"
  display_name = "Yogibo Admin Manager Runner"
}

resource "google_project_iam_member" "admin_runner_editor" {
  project = "szlife-system-admin"
  role    = "roles/editor"
  member  = "serviceAccount:${google_service_account.admin_runner.email}"
}

resource "google_artifact_registry_repository" "repo" {
  location      = "asia-northeast1"
  repository_id = "admin-manager-repo"
  format        = "DOCKER"
}

resource "google_cloudbuild_trigger" "frontend_trigger" {
  name     = "frontend-deploy-trigger"
  location = "asia-northeast1"
  # 🔑 コンソールで選んだサービスアカウントをコードにも明記します
  service_account = "projects/szlife-system-admin/serviceAccounts/admin-manager-runner@szlife-system-admin.iam.gserviceaccount.com"

  repository_event_config {
    repository = "projects/szlife-system-admin/locations/asia-northeast1/connections/github-conn/repositories/szlife-ota-szlife-admin-manager"
    push {
      branch = "^main$"
    }
  }

  filename = "frontend/cloudbuild.yaml"
}
