<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus } from 'lucide-svelte';
	import DataTable from '$lib/components/DataTable.svelte';
	let { data, form } = $props();

	let showForm = $state(false);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-bold text-gray-900">User Management</h2>
		<button
			onclick={() => (showForm = !showForm)}
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
		>
			<Plus class="mr-2 h-5 w-5" />
			Add User
		</button>
	</div>

	{#if showForm}
		<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
			<h3 class="mb-4 text-lg font-medium text-gray-900">Create New User</h3>
			<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)}>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div>
						<label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
						<input
							type="text"
							name="fullName"
							id="fullName"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="roleName" class="block text-sm font-medium text-gray-700">Role</label>
						<select
							id="roleName"
							name="roleName"
							class="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
						>
							<option value="student">Student</option>
							<option value="lecturer">Lecturer</option>
							<option value="admin">Admin</option>
						</select>
					</div>
				</div>
				<div class="mt-6 flex justify-end">
					<button
						type="button"
						onclick={() => (showForm = false)}
						class="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
						>Cancel</button
					>
					<button
						type="submit"
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
						>Create User</button
					>
				</div>
			</form>
			{#if form?.error}
				<div class="relative mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
					<span class="block sm:inline">{form.error}</span>
				</div>
			{/if}
			{#if form?.success}
				<div
					class="relative mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-700"
				>
					<span class="block sm:inline">User created successfully!</span>
				</div>
			{/if}
		</div>
	{/if}

	<div class="flex flex-col">
		<DataTable
			data={data.users}
			meta={data.meta}
			columns={[
				{ key: 'name', label: 'Name' },
				{ key: 'email', label: 'Email' },
				{ key: 'role', label: 'Role' },
				{ key: 'actions', label: '', class: 'relative px-6 py-3' }
			]}
		>
			{#snippet cell(user: any, columnKey: string)}
				{#if columnKey === 'name'}
					<div class="flex items-center">
						<div class="h-10 w-10 shrink-0">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
								<span class="text-sm font-medium text-indigo-600">{user.full_name.charAt(0)}</span>
							</div>
						</div>
						<div class="ml-4">
							<div class="text-sm font-medium text-gray-900">{user.full_name}</div>
						</div>
					</div>
				{:else if columnKey === 'email'}
					<div class="text-sm text-gray-500">{user.email}</div>
				{:else if columnKey === 'role'}
					<span
						class="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800 capitalize"
					>
						{user.role}
					</span>
				{:else if columnKey === 'actions'}
					<div class="text-right text-sm font-medium">
						<button
							type="button"
							class="cursor-pointer border-none bg-transparent text-indigo-600 hover:text-indigo-900"
							>Edit</button
						>
					</div>
				{/if}
			{/snippet}
		</DataTable>
	</div>
</div>
